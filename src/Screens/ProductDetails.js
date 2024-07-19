import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import Header from "../Components/Header";
import DrawerButton from "../Components/DrawerButton";

const ProductDetails = ({ navigation, route }) => {
  const { ProductDetails } = route?.params;
  //   console.log("product", ProductDetails);
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="p-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="pt-3 pb-2 px-2">
          <View className="bg-gray-50 p-2 rounded-lg border border-gray-100 mb-5">
            <Image
              className="h-60 w-full"
              resizeMethod="resize"
              resizeMode="contain"
              source={{ uri: ProductDetails?.image }}
            />

            <View className="bg-black py-2 px-3 absolute bottom-[-18px] right-[-10px] rounded-lg shadow">
              <View className="flex flex-row items-center justify-center">
                <AntDesign name="star" size={12} color="yellow" />
                <Text className="ml-2 text-white text-sm font-bold">
                  {ProductDetails?.rating?.rate}
                </Text>
              </View>
              <Text className="mt-1 text-white text-xs font-bold">
                {ProductDetails?.rating?.count} Reviews
              </Text>
            </View>
          </View>
          <View className="flex items-stretch gap-2">
            <View>
              <Text className="text-base text-gray-500 font-extrabold tracking-wider">
                Product Name :
              </Text>
              <Text className="text-lg font-bold text-gray-700">
                {ProductDetails?.title}
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <Text className="text-base text-gray-500 font-extrabold tracking-wider">
                Price :
              </Text>
              <Text className="ml-3 text-lg font-bold text-gray-700">
                $ {ProductDetails?.price}
              </Text>
            </View>
            <View className="flex items-center flex-row">
              <Text className="text-base text-gray-500 font-extrabold tracking-wider">
                Category :
              </Text>
              <Text className="ml-3 text-base font-bold capitalize text-gray-700">
                {ProductDetails?.category}
              </Text>
            </View>
            <View>
              <Text className="text-base font-extrabold text-gray-500 tracking-wider">
                Description :
              </Text>
              <ScrollView
                className="h-[18vh]"
                showsVerticalScrollIndicator={false}
              >
                <View className="">
                  <Text className="text-sm font-bold text-gray-700">
                    {ProductDetails?.description}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View className="mt-2 flex flex-row items-center">
          <DrawerButton cn={"px-3 mr-2.5"} title="Add to Cart">
            <Feather name="shopping-cart" size={16} color="white" />
          </DrawerButton>
          {/* <DrawerButton cn={"px-3"} title="Order Now">
            <AntDesign name="plus" size={16} color="white" />
          </DrawerButton> */}
          <TouchableOpacity
            className={`bg-black border border-gray-700 py-2 px-3 rounded-lg my-1 flex items-center flex-row`}
          >
            <View className="bg-white p-2 rounded-full mr-3">
              <AntDesign name="plus" size={16} color="black" />
            </View>
            <Text className="font-bold text-white text-lg">Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
