import { View, Text, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "@/context/authContext";

const Home = () => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <View className="flex justify-center items-center h-full bg-red-600">
      <StatusBar style="dark" />
      <Text className="text-6xl text-white">Home Screen</Text>
      <Button title="Cerrar Sesión" onPress={handleLogOut} />
    </View>
  );
};

export default Home;
