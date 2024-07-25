import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export const baseUrl = "https://fakestoreapi.com";
export const styles = {
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  height: 748,
  width: 250,
};
export const centerStyle = {
  backgroundColor: "white",
  padding: 20,
  position: "absolute",
  borderRadius: 15,
  top: "20%",
  left: "8%",
  height: 400,
  width: 300,
};
export const containerStyle = {
  backgroundColor: "white",
  padding: 20,
  position: "absolute",
  bottom: 0,
  width: "100%",
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
};

export const showCommingSoon = () => {
  return alert("Feature Comming soon.");
};

export const fetchProduct = async (cart) => {
  try {
    let arr = [],
      total = 0;
    for (let item of cart) {
      const data = await (
        await fetch(`https://fakestoreapi.com/products/${item}`)
      ).json();
      arr.push(data);
      total += data.price;
    }
    return { items: arr, total };
  } catch (error) {
    console.log("error fetching product", error);
  }
};

export const addToCart = async (id) => {
  try {
    //get the previous items of cart
    const prev = await AsyncStorage.getItem("cart");
    let items = prev ? JSON.parse(prev) : [];
    //check if it's already added
    const index = items.indexOf(id);
    if (index == -1) {
      //if not added
      items.push(id);
      // console.log("done->", items);

      //store the current items in the cart
      await AsyncStorage.setItem("cart", JSON.stringify(items));
    }

    ToastAndroid.show("Item Added to Cart", 1000);
  } catch (error) {
    console.log("error add to cart", error);
  }
};

export const removeFromCart = async (id) => {
  try {
    //get the previous items of cart
    const prev = await AsyncStorage.getItem("cart");
    let items = prev ? JSON.parse(prev) : [];
    const newItems = items.filter((item) => item != id);

    //store the current items in the cart
    await AsyncStorage.setItem("cart", JSON.stringify(newItems));
    ToastAndroid.show("Item Removed from Cart", 1000);
  } catch (error) {
    console.log("remove from cart", error);
  }
};

export const getCartData = async () => {
  try {
    // await AsyncStorage.clear();

    //get the items of cart
    const prev = await AsyncStorage.getItem("cart");
    let items = prev ? JSON.parse(prev) : [];
    return items;
  } catch (error) {
    console.log("error get cart data", error);
  }
};

export const clearCartData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("error clear cart data", error);
  }
};
