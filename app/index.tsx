import { ActivityIndicator, Text, View } from "react-native";

export default function StartPage() {
  return (
    <View className="flex justify-center items-center h-screen">
      <ActivityIndicator size="large" color="gray" />
      <Text className="mt-2">Cargando</Text>
    </View>
  );
}
