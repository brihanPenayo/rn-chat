import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignIn = () => {
  const router = useRouter();
  const [data, setData] = useState<any>({
    email: "",
    password: "",
  });

  const inputs = [
    {
      iconName: "mail",
      placeholderText: "usuario@correo.com",
      //   autoFocus: true,
      id: "email",
      error: "",
      errorText: "Email invalido",
    },
    {
      iconName: "lock",
      placeholderText: "Contraseña",
      id: "password",
      error: "",
      errorText: "Contraseña invalida",
    },
  ];

  const buttons = [
    {
      text: "Iniciar Sesión",
      onPress: () => {
        Alert.alert("Iniciando sesión");
        router.push("/(app)/home");
      },
    },
    {
      text: "Registrarse",
      outline: true,
      onPress: () => {
        router.push("/signUp");
      },
    },
  ];

  const handleChange = (value: string, id: string) => {
    setData({ ...data, [id]: value });
  };

  console.log("render");

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View
          style={{ paddingHorizontal: wp(5) }}
          className="items-center gap-3"
        >
          <View
            className="items-center justify-center bg-indigo-600 w-screen mb-10"
            style={{ height: hp(35) }}
          >
            <Text
              style={{ fontSize: hp(20) }}
              className="tracking-wider text-white font-extrabold"
            >
              RN
            </Text>
            <Text
              style={{ fontSize: hp(3), marginTop: hp(-5) }}
              className="text-neutral-200 font-semibold tracking-wide"
            >
              ReactNative Chat
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(4) }}
            className="text-neutral-600 font-bold tracking-wide mb-5"
          >
            Iniciar Sesión
          </Text>
          {inputs.map((input, index) => (
            <CustomInput
              key={index}
              onChange={(value: string) => handleChange(value, input.id)}
              value={data[input.id]}
              {...input}
            />
          ))}
          <View className="h-4" />
          {buttons.map((button, index) => (
            <CustomButton key={index} {...button} />
          ))}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignIn;
