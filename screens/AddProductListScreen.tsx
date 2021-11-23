import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ProductsContext } from "../components/context/provider";
import { StackScreens } from "../components/helpers/types";
import { ProductListScreen } from "./ProductListScreen";

export const AddProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "AddProductListScreen">
> = (props) => {
  const { products, addProduct } = useContext(ProductsContext);
  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Type, setType] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={Name}
        placeholder="useless placeholder"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={Price}
        placeholder="useless placeholder"
      />
      <TextInput
        style={styles.input}
        onChangeText={setType}
        value={Type}
        placeholder="useless placeholder"
      />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button
          onPress={() => {
            addProduct({
              id: products.length + 1,
              name: Name,
              price: Number(Price),
              type: Number(Type),
            });
            props.navigation.navigate("ProductListScreen");
          }}
          title="SAVE"
          color="green"
        />
        <Button
          onPress={() => {
            ("");
          }}
          title="CANCEL"
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "black",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  buttonStyle: {
    marginHorizontal: 10,
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
