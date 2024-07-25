import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { TextInput as TextInputRNP } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { clearCartData } from "../Utils";

const ProductCard = ({ product, map }) => {
  return (
    <View className="border border-gray-200 rounded-md flex items-center flex-row p-1.5 mb-2">
      <Image className="h-12 w-14" resizeMode="contain" src={product?.image} />
      <View className="pl-3 flex-auto">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-base font-bold tracking-wider break-words"
        >
          {product?.title}
        </Text>
        <Text className="text-base text-green-700 tracking-wider font-extrabold">
          $ {product?.price} * {(map.get(product.id) ?? 0) + 1}
        </Text>
      </View>
    </View>
  );
};

/**************************** input colors *************************/
const outline = "rgb(229 231 235)",
  activeOutline = "rgb(75 85 99)";

const Explore = ({ navigation, route }) => {
  // console.log("add->", address);

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-2 py-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="py-1 px-2 pb-14">
            {/******************************** Products **********************************/}
            {/* <View>
              <Text className="text-base text-gray-500 font-extrabold tracking-wider pb-1">
                Products :
              </Text>
              {Products?.map((product) => (
                <ProductCard map={map} key={product?.id} product={product} />
              ))}
            </View> */}

            <View className="flex items-center flex-row px-1 pb-4 pt-1 ">
              <AntDesign name="Safety" size={24} color="green" />
              <Text className="pl-3 flex-shrink text-sm font-bold text-gray-500 tracking-wider">
                Secure, Safe and Fast Delivery within 1 week with QuickShop.
                Happy Shopping !
              </Text>
            </View>

            <TouchableOpacity
              // onPress={handleOrderConfirmation}
              className={`bg-black border border-gray-700 py-2 px-3 rounded-lg my-1 flex items-center justify-center flex-row`}
            >
              <View className="bg-white p-2 rounded-full mr-3">
                <AntDesign name="check" size={16} color="black" />
              </View>
              <Text className="font-bold text-white text-xl">
                Confirm Order
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
