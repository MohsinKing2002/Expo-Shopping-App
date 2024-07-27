import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";
import { showCommingSoon } from "../Utils";

const CategoryCard = ({ onPress, children, title, subtitle = null }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border border-gray-200 rounded-lg flex items-center w-[45%] gap-1 m-2 p-3"
    >
      {children}

      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-xl font-bold tracking-wider break-words"
      >
        {title}
      </Text>
      <Text className="text-sm text-gray-500 tracking-wider font-bold">
        {subtitle ?? ""}
      </Text>
    </TouchableOpacity>
  );
};

/**************************** input colors *************************/
const outline = "rgb(229 231 235)",
  activeOutline = "rgb(75 85 99)";

const Explore = ({ navigation, route }) => {
  // console.log("add->", address);
  const [Categories, setCategories] = useState([
    {
      id: 0,
      icon: <Entypo name="man" size={40} color="black" />,
      title: "Men",
      subtitle: "Preium Shirts, Jeans, T-shirts..",
    },
    {
      id: 1,
      icon: <Ionicons name="woman-sharp" size={40} color="black" />,
      title: "Women",
      subtitle: "Premium Sareees, Salwars, Jeans..",
    },
    {
      id: 2,
      icon: <AntDesign name="iconfontdesktop" size={40} color="black" />,
      title: "Electronics",
      subtitle: "Mobiles, Earbuds, Accessories..",
    },
    {
      id: 3,
      icon: <MaterialCommunityIcons name="gold" size={40} color="black" />,
      title: "Jwelery",
      subtitle: "Gold, Silver Chains, Neckless..",
    },
    {
      id: 4,
      icon: <Ionicons name="football" size={40} color="black" />,
      title: "Sports",
      subtitle: "Football, Cricket, Volleyball..",
    },
    {
      id: 5,
      icon: <Ionicons name="fast-food-outline" size={40} color="black" />,
      title: "Foods",
      subtitle: "Fast-foods, Chicken, Rice..",
    },
    {
      id: 6,
      icon: <AntDesign name="inbox" size={40} color="black" />,
      title: "Make Ups",
      subtitle: "Lipstick, Creams, Body Lotions..",
    },
    {
      id: 7,
      icon: <AntDesign name="medicinebox" size={40} color="black" />,
      title: "Medicines",
      subtitle: "Medicines, Doctor Consulting..",
    },
  ]);

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-2 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="py-1 px-2 pb-14">
            {/******************************** Products **********************************/}
            <View className="flex flex-row items-center flex-wrap">
              {Categories?.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  subtitle={category.subtitle}
                  onPress={showCommingSoon}
                >
                  {category.icon}
                  {/* <Entypo name="man" size={24} color="black" /> */}
                </CategoryCard>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
