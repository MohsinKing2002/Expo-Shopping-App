import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { Avatar, Divider, Modal, Portal } from "react-native-paper";
import { containerStyle, styles } from "../Utils";
import DrawerButton from "./DrawerButton";

const Header = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View className="flex flex-row items-center justify-between px-1 py-3">
      <TouchableOpacity onPress={showModal}>
        <Avatar.Icon
          className="bg-black"
          icon={() => <AntDesign name="bars" color="white" size={24} />}
          size={40}
        />
      </TouchableOpacity>
      <View className="bg-black p-2.5 rounded-full">
        <SimpleLineIcons name="handbag" size={20} color="white" />
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles}
        >
          <View className="flex-1">
            {/**************************** drawer buttons *************************/}
            <View className="flex items-center flex-row justify-between px-4 pt-6 pb-2">
              <Text className="font-extrabold text-[22px] tracking-wider">
                QuickShop
              </Text>
              <TouchableOpacity onPress={hideModal}>
                <AntDesign name="closecircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Divider />
            <View className="px-5">
              {/**************************** User *************************/}
              <View className="my-7 flex items-center">
                <View className="bg-black p-4 rounded-full mb-2">
                  <SimpleLineIcons name="handbag" size={22} color="white" />
                </View>
                <Text className="text-2xl font-bold tracking-wider">
                  Mohsin King
                </Text>
              </View>

              {/**************************** drawer buttons *************************/}
              <DrawerButton title="Home">
                <Entypo name="home" size={18} color="white" />
              </DrawerButton>
              <DrawerButton title="Explore">
                <Feather name="search" size={16} color="white" />
              </DrawerButton>
              <DrawerButton title="Wishlist" />
              <DrawerButton title="Cart">
                <Feather name="shopping-cart" size={16} color="white" />
              </DrawerButton>
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default Header;
