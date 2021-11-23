import React from "react";
import { ProductListScreen } from "././screens/ProductListScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "././components/helpers/types";
import AddProductListScreen from "./screens/AddProductListScreen";
import { title } from "process";
import ProductsProvider from "./components/context/provider";



export default function App() {
  const Stack = createNativeStackNavigator<StackScreens>();
  return (
    <ProductsProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductListScreen">
        <Stack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
          options={{ title: "Items", headerStyle:{backgroundColor: "green"}, headerTitleStyle:{color: "white"} }}
          
        />
        <Stack.Screen name="AddProductListScreen" component={AddProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ProductsProvider>
  );
}