import { Slot, useRouter, useSegments } from "expo-router";
import { View } from "react-native";
import "../global.css";
import { AuthProvider, useAuth } from "@/context/authContext";
import { useEffect } from "react";

const MainLayout = () => {
  const { isAuth } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuth == "undefined") return;
    const inApp = segment.includes("app");
    if (isAuth && !inApp) router.replace("home");
    else router.replace("/signIn");
  }, [isAuth]);

  return <Slot />;
};

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

export default _layout;
