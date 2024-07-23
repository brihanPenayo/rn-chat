import CustomInput from "@/components/CustomInput/CustomInput";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignIn = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text style={{ fontSize: hp(1.8) }}>SignIn</Text>
      <CustomInput iconName={"mail"} placeholderText={"Email"} autoFocus />
      <CustomInput iconName={"lock"} placeholderText={"Contraseña"} />
    </View>
  );
};

export default SignIn;
