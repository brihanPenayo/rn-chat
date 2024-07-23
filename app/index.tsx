import { ActivityIndicator, Text, View } from "react-native";

const index = () => {
  return (
    <View className="flex justify-center items-center h-screen">
      <ActivityIndicator size="large" color="gray" />
      <Text className="mt-2">Cargando</Text>
    </View>
  );
};

export default index;
