import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import DrawerButton from "../Components/DrawerButton";
import Gif from "../../assets/success.gif";

const OrderSuccessScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full gap-6 p-5 items-center justify-center">
        <Image className="h-44 w-44 mb-6" source={Gif} />
        <Text className="text-base font-extrabold text-gray-500 tracking-wider">
          We have recieved your Order. It will be deliver to you within 1 week.
          Happy Shopping !
        </Text>

        <DrawerButton
          onPress={() => navigation.navigate("home")}
          cn={"w-52 mt-6 mb-3"}
          title="Shop More"
        >
          <Feather name="shopping-cart" color={"white"} size={16} />
        </DrawerButton>
        <DrawerButton cn={"w-52"} title="View Orders" />
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;
