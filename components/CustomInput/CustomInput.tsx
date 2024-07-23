import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CustomInputProps {
  iconName: any;
  placeholderText: string;
  autoFocus?: boolean;
  type?: "default" | "numeric" | "email-address";
}

const CustomInput = ({
  iconName,
  placeholderText,
  autoFocus,
  type = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={{ width: wp(85), height: hp(6) }}
      className={`${
        isFocused ? "border-neutral-300" : "border-white "
      }  bg-neutral-100 rounded-md transition-[border-color] duration-300 flex-row gap-2 !text-neutral-600 items-center border-2 px-4`}
    >
      <Text className="text-neutral-600">
        <Feather name={iconName} size={hp(2.5)} />
      </Text>
      <TextInput
        style={{ fontSize: hp(1.8) }}
        placeholder={placeholderText}
        autoFocus={autoFocus}
        className="flex-1 h-full"
        secureTextEntry={iconName === "lock"}
        keyboardType={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default CustomInput;
