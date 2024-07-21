import React from "react";
import { Snackbar } from "react-native-paper";

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
  top: 0,
  height: 748,
  width: 250,
};

export const showCommingSoon = () => {
  return alert("Feature Comming soon.");
};

export const fetchProduct = async (cart) => {
  try {
    let arr = [];
    for (let item of cart) {
      const data = await (
        await fetch(`https://fakestoreapi.com/products/${item}`)
      ).json();
      arr.push(data);
    }
    return arr;
  } catch (error) {
    console.log("error fetching product", error);
  }
};
