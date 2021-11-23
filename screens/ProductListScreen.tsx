import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { StackScreens } from "../components/helpers/types";
import { Divider, List } from "react-native-paper";
import ProductsProvider, {
  ProductsContext,
} from "../components/context/provider";
import { ListItem } from "../components/lists/List";

export const ProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "ProductListScreen">
> = (props) => {
  const { products } = useContext(ProductsContext);
  const renderItem = ({ item }: { item: ListItem }) => {
    return (
      <ListItem
        id={item.id}
        name={item.name}
        price={item.price}
        type={item.type}
        onClick={() => {}}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Name </Text>
        <Text>Type</Text>
        <Text>Price</Text>
      </View>
      <Divider />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}/>
        
      <View style={styles.IconContainer}>
        <MaterialIcons
          name="add-circle"
          color={"green"}
          size={60}
          onPress={() => props.navigation.navigate("AddProductListScreen")}
        ></MaterialIcons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  IconContainer: {
    position: "absolute",
    bottom: 10,
    alignSelf: "flex-end",
    right: 10,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    padding: 2,
    width: 270,
  },
});
