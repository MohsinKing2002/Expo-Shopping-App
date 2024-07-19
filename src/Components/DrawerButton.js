import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const DrawerButton = ({ children, title = "Tab Bar", cn = null }) => {
  return (
    <TouchableOpacity
      className={`border border-gray-200 py-2 px-4 rounded-lg my-1 flex items-center flex-row ${cn}`}
    >
      <View className="bg-black p-2 rounded-full mr-3">
        {children ?? <SimpleLineIcons name="handbag" size={16} color="white" />}
      </View>
      <Text className="font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;