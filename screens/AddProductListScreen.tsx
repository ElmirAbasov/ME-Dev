import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
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



import { HelperText, RadioButton } from 'react-native-paper';


export const AddProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "AddProductListScreen">
> = (props) => {

  const params = props.route.params;

  const { products, addProduct, updateProduct } = useContext(ProductsContext);
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState(0);
  const [Price, setPrice] = React.useState("");

  const [type, setType] = React.useState('0');
  

  const invalidPriceRange = () => {
    if (Number(type) === 0 && Number(Price) > 0) {
      return false;
    } else if (Number(type) === 1) {
      if (Number(Price) >= 1000 && Number(Price) <= 2600) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  useEffect(() => {

    setId(params.item.id);
    setName(params.item.name);
    setPrice(String(params.item.price));
    setType(String(params.item.type));

  }, []);

  
  const invalidNameInput = () => {
    if (name.trim() === "") {
      return false;
    } else {
      if (products.some((item) => item.name === name && item.id !== id)) {
        return true;
      } else {
        return false;
      }
    }
  };


  const getPriceNotValidText = (type: number) => {
    if (type === 1) {
      return "1000-2600"
    } else {
      return ">0"
    }
  };
  




  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create New Product</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
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

      <HelperText 
      type= "error" 
      visible={invalidPriceRange()}
      >
        {getPriceNotValidText(Number(type))}</HelperText>
      <RadioButton.Group onValueChange={newValue => setType(newValue)} value={type}>
        <View style={styles.radio}>
          <RadioButton value="0" />
          <Text>integrated</Text>

        </View>
        <View style={styles.radio}>
          <RadioButton value="1" />
          <Text>periphiral</Text>

        </View>
      </RadioButton.Group>


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
            if (!invalidPriceRange() && !invalidNameInput()) {
              if (params.add) {

                addProduct({
                  id: products.length + 1,
                  name: name,
                  price: Number(Price),
                  type: Number(type),
                });
              } else {
                updateProduct({
                  id: id,
                  name: name,
                  price: Number(Price),
                  type: Number(type),
                });

              }
              props.navigation.navigate("ProductListScreen");
            }
          }}
        >
          <Text style={styles.saveButtonText}>SAVE</Text>
          <Entypo name="align-bottom" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyleCancel}
        onPress={() => {
          props.navigation.navigate("ProductListScreen");
        }}>
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
  radio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"

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
