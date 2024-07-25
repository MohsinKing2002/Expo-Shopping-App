import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  ActivityIndicator,
  Modal,
  Portal,
  TextInput as TextInputRNP,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import Header from "../Components/Header";
import DrawerButton from "../Components/DrawerButton";
import {
  centerStyle,
  containerStyle,
  fetchProduct,
  getCartData,
  removeFromCart,
  showCommingSoon,
} from "../Utils";
import EmptyCart from "../../assets/cart.gif";

const map = new Map();

const ProductCard = ({
  product,
  totalPrice,
  setTotalPrice,
  Products,
  setProducts,
}) => {
  const colorPls = "rgb(75 85 99)";
  const colorMin = "rgb(107 114 128)";
  const [count, setCount] = useState(1);
  return (
    <View className="border border-gray-200 rounded-md flex items-center flex-row p-1.5 mb-2">
      <Image className="h-12 w-14" resizeMode="contain" src={product?.image} />
      <View className="pl-2 flex-auto">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-base font-bold tracking-wider break-words"
        >
          {product?.title}
        </Text>
        <Text className="text-lg tracking-wider text-green-700 font-extrabold">
          $ {(product?.price * count).toFixed(2)}
        </Text>
      </View>
      <View className="ml-2 flex items-center space-x-2 flex-row">
        <TouchableOpacity
          onPress={() => {
            setCount((prev) => prev + 1);
            setTotalPrice(totalPrice + product.price);
            map.set(product.id, count);
          }}
        >
          <AntDesign name="pluscircleo" size={24} color={colorPls} />
        </TouchableOpacity>
        <Text className="text-lg text-gray-600 font-bold">{count}</Text>
        <TouchableOpacity
          onPress={() => {
            if (count > 1) {
              setCount((prev) => prev - 1);
              setTotalPrice(totalPrice - product.price);
              map.set(product.id, count);
            } else {
              removeFromCart(product.id);
              setProducts(Products.filter((item) => item.id != product.id));
              map.delete(product.id);
            }
          }}
        >
          <AntDesign name="minuscircleo" size={24} color={colorMin} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**************************** input colors *************************/
const outline = "rgb(229 231 235)",
  activeOutline = "rgb(75 85 99)";

const pricings = [
  { id: 1, title: "Discount", value: -10 },
  { id: 2, title: "Delivery Charges", value: 0 },
  { id: 3, title: "Shipping Charges", value: 0 },
];

const MyCart = ({ navigation, route }) => {
  const [Products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  // console.log("products", Products);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const cart = await getCartData();
        const result = await fetchProduct(cart);
        // console.log("result->", result);
        setProducts(result.items);
        setTotalPrice(result.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      {loading ? (
        <ActivityIndicator
          className="absolute top-2/4 left-2/4"
          animating={true}
          color="purple"
          size={"large"}
        />
      ) : (
        <View className="px-2 py-4">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          {Products.length == 0 ? (
            <View className="flex-auto h-5/6 items-center justify-center p-4">
              <Image className="h-56 w-56" source={EmptyCart} />
              <Text className="pb-5 text-xl font-extrabold text-gray-500 tracking-wider">
                Your Cart is Empty !
              </Text>
              <DrawerButton
                onPress={() => navigation.navigate("home")}
                cn={"w-44"}
                title="Shop now"
              ></DrawerButton>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="py-1 px-2 pb-14">
                {/******************************** Products **********************************/}
                <View>
                  <Text className="text-base text-gray-500 font-extrabold tracking-wider pb-1">
                    Products :
                  </Text>
                  {Products?.map((product) => (
                    <ProductCard
                      Products={Products}
                      setProducts={setProducts}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                      key={product?.id}
                      product={product}
                    />
                  ))}
                </View>

                {/****************************** Price Details **************************************/}
                <View>
                  <Text className="pt-3 text-base font-extrabold text-gray-500 tracking-wider">
                    Price Details :
                  </Text>

                  <View className="px-1 py-2">
                    <View className="pb-0.5 flex flex-row items-center justify-between">
                      <Text className="text-base font-bold text-gray-500 tracking-wider">
                        Price ({Products.length} item)
                      </Text>
                      <Text className="text-base font-extrabold text-green-700 tracking-wider">
                        $ {totalPrice.toFixed(2)}
                      </Text>
                    </View>

                    {pricings?.map((item) => (
                      <View
                        key={item.id}
                        className="pb-0.5 flex flex-row items-center justify-between"
                      >
                        <Text className="text-base font-bold text-gray-500 tracking-wider">
                          {item.title}
                        </Text>
                        <Text className="text-base font-extrabold text-green-700 tracking-wider">
                          $ {item.value}
                        </Text>
                      </View>
                    ))}
                    {/****************** total price *********************/}
                    <View className="border-t border-gray-200 mt-2 pt-1 flex flex-row items-center justify-between">
                      <Text className="text-base font-bold text-gray-500 tracking-wider">
                        Total Price
                      </Text>
                      <Text className="text-lg font-extrabold text-green-700 tracking-wider">
                        $ {(totalPrice - 10).toFixed(2)}
                      </Text>
                    </View>
                  </View>

                  <View className="flex items-center flex-row px-1 py-3 ">
                    <AntDesign name="Safety" size={24} color="green" />
                    <Text className="pl-3 flex-shrink text-sm font-bold text-gray-500 tracking-wider">
                      Secure, Safe and Fast Delivery within 1 week with
                      QuickShop. Happy Shopping !
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("orderConfirm", {
                      Data: { Products, map, totalPrice },
                    })
                  }
                  className={`bg-black border border-gray-700 py-2 px-3 rounded-lg my-1 flex items-center justify-center flex-row`}
                >
                  <View className="bg-white p-2 rounded-full mr-3">
                    <AntDesign name="check" size={16} color="black" />
                  </View>
                  <Text className="font-bold text-white text-xl">
                    Place Order
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyCart;
