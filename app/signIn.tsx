import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignIn = () => {
  const inputs = [
    {
      iconName: "mail",
      placeholderText: "Email",
      autoFocus: true,
    },
    { iconName: "lock", placeholderText: "Contraseña" },
  ];

  const buttons = [
    {
      text: "Iniciar Sesión",
    },
    {
      text: "Registrarse",
      outline: true,
    },
  ];

  return (
    <View className="flex-1 justify-center items-center gap-3">
      <View className="justify-center items-center mb-10">
        <Text
          style={{ fontSize: hp(12) }}
          className=" tracking-wider text-indigo-600 font-extrabold"
        >
          RN
        </Text>
        <Text
          style={{ fontSize: hp(1.8), marginTop: hp(-2.5) }}
          className="text-neutral-600 font-extrabold"
        >
          ReactNative Chat
        </Text>
      </View>
      <Text style={{ fontSize: hp(1.8) }}>Iniciar Sesión</Text>
      {inputs.map((input, index) => (
        <CustomInput key={index} {...input} />
      ))}
      {buttons.map((button, index) => (
        <CustomButton key={index} {...button} />
      ))}
    </View>
  );
};

export default SignIn;
