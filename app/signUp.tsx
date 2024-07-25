import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput, {
  CustomInputProps,
} from "@/components/CustomInput/CustomInput";
import { useAuth } from "@/context/authContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignUp = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [data, setData] = useState<any>({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState<boolean>(false);

  const inputs: CustomInputProps[] = [
    {
      iconName: "mail",
      placeholderText: "usuario@correo.com",
      // autoFocus: true,
      type: "email",
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

  const handleRegister = async () => {
    setSubmitting(true);
    const res = await register(data.email, data.password);
    if (!res?.success) Alert.alert("Error", res?.msg);
    setSubmitting(false);
  };
  const buttons = [
    {
      text: "Registrarse",
      showLoading: submitting,
      onPress: handleRegister,
    },
    {
      text: "Cancelar",
      outline: true,
      onPress: () => {
        router.back();
      },
    },
  ];

  const handleChange = (value: string, id: string) => {
    setData({ ...data, [id]: value });
  };

  console.log("render");

  return (
    <View
      style={{ paddingHorizontal: wp(5) }}
      className="flex-1 justify-center bg-white items-center gap-3"
    >
      <View className="justify-center items-center mb-10">
        <Text
          style={{ fontSize: hp(16) }}
          className=" tracking-wider text-indigo-600 font-extrabold"
        >
          RN
        </Text>
        <Text
          style={{ fontSize: hp(2), marginTop: hp(-2.5) }}
          className="text-neutral-600 font-extrabold"
        >
          ReactNative Chat
        </Text>
      </View>
      <Text
        style={{ fontSize: hp(4) }}
        className="tracking-wider font-bold text-neutral-600 mb-6"
      >
        Registro
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
  );
};

export default SignUp;
