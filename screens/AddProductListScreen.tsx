import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProductsContext } from "../components/context/provider";
import { StackScreens } from "../components/helpers/types";
import { useFonts } from "expo-font";

export const AddProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "AddProductListScreen">
> = (props) => {
  const { products, addProduct } = useContext(ProductsContext);
  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Type, setType] = React.useState("");
  const [fontsLoaded] = useFonts({
    CrazyFont: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create New Product</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={Name}
        placeholder="Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={Price}
        placeholder="Price"
      />
      <TextInput
        style={styles.input}
        onChangeText={setType}
        value={Type}
        placeholder="Product Type"
      />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={styles.buttonStyleSave}
          onPress={() => {
            addProduct({
              id: products.length + 1,
              name: Name,
              price: Number(Price),
              type: Number(Type),
            });
            props.navigation.navigate("ProductListScreen");
          }}
        >
          <Text style={styles.saveButtonText}>SAVE</Text>
          <Entypo name="align-bottom" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyleCancel}>
          <Text style={styles.cancelButtonText}>CANCEL</Text>
          <MaterialCommunityIcons name="cancel" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cancelButtonText: {
    fontSize: 20,
    color: "black",
  },
  saveButtonText: {
    fontSize: 20,
    color: "white",
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "CrazyFont",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    color: "black",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  buttonStyleCancel: {
    marginTop: 20,
    width: "45%",
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 17,
  },

  buttonStyleSave: {
    marginTop: 20,
    width: "45%",
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 17,
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
