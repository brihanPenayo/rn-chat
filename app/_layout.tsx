import { Slot } from "expo-router";
import "../global.css";

import { View } from "react-native";

const _layout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};

export default _layout;
