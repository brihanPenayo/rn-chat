import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<any>(null);
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // todo-firebase
    setTimeout(() => {
      setIsAuth(true);
    }, 3000);
  }, []);

  const logIn = async (email, password) => {
    try {
    } catch (err) {}
  };

  const logOut = async () => {
    try {
    } catch (err) {}
  };

  const register = async (email, password, name, imgURL) => {
    try {
    } catch (err) {}
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
