import { Slot, Stack, useRouter, useSegments } from "expo-router";
import "../global.css";
import { AuthProvider, useAuth } from "@/context/authContext";
import { useEffect } from "react";
import { Menu, MenuProvider } from "react-native-popup-menu";

const MainLayout = () => {
  const { isAuth } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuth == "undefined") return;
    console.log("Segmen:", segment[0]);
    const inApp = segment[0] == "(app)";
    if (isAuth && !inApp) router.replace("home");
    else if (!isAuth) router.replace("signIn");
  }, [isAuth]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
};

const _layout = () => {
  return (
    <MenuProvider>
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </MenuProvider>
  );
};

export default _layout;
