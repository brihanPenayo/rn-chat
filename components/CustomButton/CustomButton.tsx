import { Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CustomButtonProps {
  text: string;
  outline?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { text, outline = false } = props;
  console.log(outline);
  return (
    <TouchableOpacity
      activeOpacity={outline ? 0.5 : 0.75}
      style={{ width: wp(85), height: hp(6) }}
      className={`${
        outline
          ? "border-indigo-600 bg-white"
          : "border-indigo-600 bg-indigo-600"
      } flex justify-center items-center rounded-md border-2`}
    >
      <Text
        style={{ fontSize: hp(1.8) }}
        className={`${
          outline ? "text-indigo-600" : "text-white"
        } font-bold tracking-wider`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
