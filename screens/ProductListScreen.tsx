import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { StackScreens } from "../components/helpers/types";
import { Divider } from "react-native-paper";

export const ProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "ProductListScreen">
> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Name </Text>
        <Text>Type</Text>
        <Text>Price</Text>
      </View>
      <Divider />
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
    justifyContent: "space-evenly"
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
