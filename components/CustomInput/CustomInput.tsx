import { View, Text, TextInput } from "react-native";
import React, { forwardRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface CustomInputProps {
  iconName: any;
  placeholderText: string;
  autoFocus?: boolean;
  type?: "text" | "numeric" | "email";
  onChange: (value: string) => void;
  value?: string | undefined;
  id: string;
  error: string;
}

const CustomInput = ({
  iconName,
  placeholderText,
  autoFocus,
  type = "text",
  onChange,
  value = "",
  error,
  id,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <View
        style={{ height: hp(6) }}
        className={`${
          isFocused ? "border-neutral-300" : "border-white "
        } bg-neutral-100 rounded-xl transition-[border-color] w-full flex-row duration-300 gap-2 items-center border-2 px-4 ${
          error && "!border-red-400"
        }`}
      >
        <Text className="text-neutral-600">
          <Feather name={iconName} size={hp(2.5)} />
        </Text>
        <TextInput
          style={{ fontSize: hp(1.8) }}
          placeholder={placeholderText}
          onChangeText={onChange}
          autoFocus={autoFocus}
          value={value}
          className="flex-1 h-full tracking-wider placeholder:text-neutral-400 text-neutral-600"
          secureTextEntry={iconName === "lock"}
          inputMode={type}
          autoCapitalize="none"
          id={id}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {error && <Text className="text-red-400"> Invalido </Text>}
    </View>
  );
};

export default CustomInput;
