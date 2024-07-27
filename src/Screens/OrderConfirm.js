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

const Payments = [
  { id: 1, title: "Net Banking", active: false },
  { id: 2, title: "Credit/Debit Card", active: false },
  { id: 3, title: "UPI", active: false },
  { id: 4, title: "Cash on Delivery", active: true },
];

const PaymentButton = ({
  children = null,
  title = null,
  cn = null,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row items-center border border-gray-200 py-2 px-4 rounded-lg mb-1.5 ${cn}`}
    >
      {children ?? (
        <Fontisto name="radio-btn-passive" size={18} color="rgb(107 114 128)" />
      )}
      <Text className="pl-3 text-base font-extrabold text-gray-500 tracking-wider">
        {title ?? "Cash on Delivery"}
      </Text>
    </TouchableOpacity>
  );
};

/**************************** input colors *************************/
const outline = "rgb(229 231 235)",
  activeOutline = "rgb(75 85 99)";

const OrderConfirmScreen = ({ navigation, route }) => {
  const [active, setActive] = useState(0);
  const [address, setAddress] = useState({ add: "", land: "", pin: "" });

  const {
    Data: { Products, map, totalPrice },
  } = route?.params;

  // console.log("add->", address);

  const handleOrderConfirmation = () => {
    if (!address.add || !address.land || !address.pin)
      return ToastAndroid.show("Delivery details is Incomplete", 1000);
    if (!active)
      return ToastAndroid.show("Payment method is not Selected", 1000);
    navigation.navigate("orderSuccess");
    clearCartData();
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-2 py-4">
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
                <ProductCard map={map} key={product?.id} product={product} />
              ))}
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
                  numberOfLines={2}
                  outlineColor={outline}
                  activeOutlineColor={activeOutline}
                  value={address.add}
                  onChangeText={(text) =>
                    setAddress((prev) => ({
                      ...prev,
                      add: text,
                    }))
                  }
                />
                <TextInputRNP
                  label="Landmark"
                  mode="outlined"
                  outlineColor={outline}
                  activeOutlineColor={activeOutline}
                  value={address.land}
                  onChangeText={(text) =>
                    setAddress((prev) => ({
                      ...prev,
                      land: text,
                    }))
                  }
                />
                <TextInputRNP
                  label="Pin Code"
                  mode="outlined"
                  outlineColor={outline}
                  activeOutlineColor={activeOutline}
                  value={address.pin}
                  onChangeText={(text) =>
                    setAddress((prev) => ({
                      ...prev,
                      pin: text,
                    }))
                  }
                />
              </View>
            </View>

            {/****************************** Price Details **************************************/}
            <View className="p-2 my-4 border border-gray-200 rounded-lg">
              <View className="pb-2 flex flex-row items-center justify-between">
                <Text className="text-base font-extrabold text-gray-500 tracking-wider">
                  Payment Method :
                </Text>
                <Text className="text-lg font-extrabold text-green-700 tracking-wider">
                  ${" "}
                  {Products.length > 1
                    ? (totalPrice - 10).toFixed(2)
                    : totalPrice.toFixed(2)}
                </Text>
              </View>
              {Payments?.map((item) => (
                <PaymentButton
                  onPress={() => {
                    if (!item.active)
                      ToastAndroid.show(
                        "We're having issue with this payment.",
                        1000
                      );
                    else setActive(item.id);
                  }}
                  key={item.id}
                  title={item.title}
                >
                  <Fontisto
                    name={
                      active == item.id
                        ? "radio-btn-active"
                        : "radio-btn-passive"
                    }
                    size={18}
                    color="rgb(75 85 99)"
                  />
                </PaymentButton>
              ))}
            </View>

            <View className="flex items-center flex-row px-1 pb-4 pt-1 ">
              <AntDesign name="Safety" size={24} color="green" />
              <Text className="pl-3 flex-shrink text-sm font-bold text-gray-500 tracking-wider">
                Secure, Safe and Fast Delivery within 1 week with QuickShop.
                Happy Shopping !
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleOrderConfirmation}
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
