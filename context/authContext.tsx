import { auth, db } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  children: React.ReactNode;
}

interface FireBaseError {
  message: string;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<any>(null);
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const authState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuth(true);
      } else {
        setUser(null);
        setIsAuth(false);
      }
    });
    return authState;
  }, []);

  const logIn = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, data: res?.user };
    } catch (err: any) {
      console.log(err.message);
      const errorCode = err.code || "";
      const msg = errorMessages[errorCode] || "Error desconocido";
      return { success: false, msg };
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      console.log(err);
    }
  };

  const errorMessages: { [key: string]: string } = {
    "auth/email-already-in-use": "Email ya registrado",
    "auth/invalid-email": "Email invalido",
    "auth/weak-password": "La contraseña es muy débil",
    "auth/missing-email": "Falta el email",
    "auth/missing-password": "Falta la contraseña",
    "auth/user-not-found": "Usuario no encontrado",
    "auth/invalid-credential": "Credenciales invalidas",
  };

  const register = async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await setDoc(doc(db, "users", res?.user?.uid), {
        userId: res?.user?.uid,
      });
      return { success: true, data: res?.user };
    } catch (err: any) {
      const errorCode = err.code || "";
      const msg = errorMessages[errorCode] || "Error desconocido";
      return { success: false, msg };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        logIn,
        logOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value: any = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return value;
};
