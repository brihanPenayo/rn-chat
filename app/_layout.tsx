import { Slot, Stack, useRouter, useSegments } from "expo-router";
import "../global.css";
import { AuthProvider, useAuth } from "@/context/authContext";
import { useEffect } from "react";

const MainLayout = () => {
  const { isAuth } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuth == "undefined") return;
    console.log("Segmen:", segment[0]);
    const inApp = segment[0] == "(app)";
    if (isAuth && !inApp) router.replace("home");
    else if (!isAuth) router.replace("/signIn");
  }, [isAuth]);

  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
    </Stack>
  );
};

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

export default _layout;
