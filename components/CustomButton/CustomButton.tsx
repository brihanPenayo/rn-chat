import { Pressable, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CustomButtonProps {
  text: string;
  outline?: boolean;
  onPress: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
  const { text, outline = false, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={{ height: hp(6) }}
      className={`${
        outline
          ? "border-indigo-600 bg-white active:bg-indigo-100"
          : "border-indigo-600 bg-indigo-600 active:bg-indigo-800"
      } flex w-full justify-center items-center rounded-xl border-2 transition-colors`}
    >
      <Text
        style={{ fontSize: hp(1.8) }}
        className={`${
          outline ? "text-indigo-600" : "text-white"
        } font-bold tracking-wider`}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
