import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Modal, Portal, TextInput as TextInputRNP } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import Header from "../Components/Header";
import DrawerButton from "../Components/DrawerButton";
import { centerStyle, containerStyle, showCommingSoon } from "../Utils";
import Gif from "../../assets/success.gif";

const ProductCard = ({ product }) => {
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
        <Text className="text-lg tracking-wider font-bold">
          $ {product?.price}
        </Text>
      </View>
    </View>
  );
};

/**************************** input colors *************************/
const outline = "rgb(229 231 235)",
  activeOutline = "rgb(75 85 99)";

const OrderConfirmScreen = ({ navigation, route }) => {
  const { Products } = route?.params;
  //   console.log("product", Products);
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="p-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="py-1 px-2 pb-14">
            {/******************************** Products **********************************/}
            <View>
              <Text className="text-base text-gray-500 font-extrabold tracking-wider pb-1">
                Products :
              </Text>
              {Products?.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
              {/* <ProductCard product={Products[0]} />
              <ProductCard product={Products[0]} />
              <ProductCard product={Products[0]} /> */}
            </View>

            {/******************* order confirmation form @ address ************************/}
            <View>
              <Text className="pt-3 text-base font-extrabold text-gray-500 tracking-wider">
                Delivery Address :
              </Text>
              <View className="flex items-stretch gap-2">
                <TextInputRNP
                  label="Address"
                  mode="outlined"
                  outlineColor={outline}
                  activeOutlineColor={activeOutline}
                  // value={text}
                  // onChangeText={text => setText(text)}
                />
                <TextInputRNP
                  label="Landmark"
                  mode="outlined"
                  outlineColor={outline}
                  activeOutlineColor={activeOutline}
                  // value={text}
                  // onChangeText={text => setText(text)}
                />
                <TextInputRNP
                  label="Pin Code"
                  mode="outlined"
                  outlineColor={outline}
                  activeOutlineColor={activeOutline}
                  // value={text}
                  // onChangeText={text => setText(text)}
                />
              </View>
            </View>

            {/****************************** Price Details **************************************/}
            <View>
              <Text className="pt-3 text-base font-extrabold text-gray-500 tracking-wider">
                Price Details :
              </Text>

              <View className="px-1 py-2">
                <View className="flex flex-row items-center justify-between">
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="w-3/4 text-base font-bold text-gray-500 tracking-wider"
                  >
                    {Products[0].title}{" "}
                    glhglhlghlghlghlhglhghlglhalghlglhlghlglhglhlghlhglhglhlghlgh
                  </Text>
                  <Text className="text-base font-extrabold text-gray-700 tracking-wider">
                    $ 50
                  </Text>
                </View>
                {/****************** total price *********************/}
                <View className="border-t border-gray-200 mt-2 pt-1 flex flex-row items-center justify-between">
                  <Text className="text-base font-bold text-gray-500 tracking-wider">
                    Total Price
                  </Text>
                  <Text className="text-lg font-extrabold text-gray-700 tracking-wider">
                    $ 50
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("orderSuccess")}
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

export default OrderConfirmScreen;
