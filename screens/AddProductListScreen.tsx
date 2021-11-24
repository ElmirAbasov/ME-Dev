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


export const AddProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "AddProductListScreen">
> = (props) => {
  const { products, addProduct } = useContext(ProductsContext);
  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Type, setType] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create New Product</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={Name}
        placeholder="Name"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={Price}
        placeholder="Price"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.input}
        onChangeText={setType}
        value={Type}
        placeholder="Product Type"
        placeholderTextColor="grey"
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
          <Entypo name="align-bottom" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyleCancel}>
          <Text style={styles.cancelButtonText}>CANCEL</Text>
          <MaterialCommunityIcons name="cancel" size={30} color="white"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cancelButtonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    paddingRight: 10
  },
  saveButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    paddingRight: 10
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  buttonStyleCancel: {
    marginTop: 20,
    height: 50,
    width: "45%",
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#ff3d3d",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 17,
    flexDirection: "row",
    justifyContent: "center"
  },

  buttonStyleSave: {
    marginTop: 20,
    width: "45%",
    height: 50,
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 17,
    flexDirection: "row",
    justifyContent: "center"
  },

  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
