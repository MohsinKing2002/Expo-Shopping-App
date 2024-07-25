import { StatusBar } from "expo-status-bar";
import Home from "./src/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./src/Screens/ProductDetails";
import { PaperProvider } from "react-native-paper";
import OrderConfirmScreen from "./src/Screens/OrderConfirm";
import OrderSuccessScreen from "./src/Screens/OrderSuccess";
import MyCart from "./src/Screens/Cart";
import Explore from "./src/Screens/Explore";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: "none" }}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="productDetails"
            component={ProductDetails}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="cart"
            component={MyCart}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="orderConfirm"
            component={OrderConfirmScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="orderSuccess"
            component={OrderSuccessScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="explore"
            component={Explore}
          />
        </Stack.Navigator>
        <StatusBar backgroundColor="white" style="auto" />
      </NavigationContainer>
    </PaperProvider>
    // <View className="mt-10 px-4 bg-white">
    //   <Header />
    //   <Home />
    // </View>
  );
}
