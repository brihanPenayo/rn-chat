import { View, Text, Platform, Image, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

const HomeHeader = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: Platform.OS === "ios" ? top : top * 2 }}
      className="bg-indigo-600 flex-row items-center justify-between px-6 pb-2"
    >
      <Menu>
        <MenuTrigger>
          <Text className="text-neutral-200">
            <Feather name="menu" size={hp(3)} />
          </Text>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: "red" }}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu>
      <StatusBar style="light" />

      <Text className="text-neutral-200 tracking-wider font-bold text-2xl">
        RN Chat
      </Text>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        className="h-11 w-11 rounded-full"
        resizeMode="cover"
      />
    </View>
  );
};

export default HomeHeader;
