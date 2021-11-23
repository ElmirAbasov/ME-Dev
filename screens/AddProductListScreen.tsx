import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AddProductListScreen = () => {
     const [enteredValue, setEnteredValue] = React.useState("");
  return (
    <View style={styles.container}>
      <Text
        style={[styles.width80, styles.margin10]}
        
      > First Name </Text>
      <Text
        style={[styles.width80, styles.margin10]}>
        
        Price </Text>
      <Text
       
        style={[styles.width80, styles.margin10]}>
            Product Type
      </Text>
    </View>
  );
};

export default AddProductListScreen;

const styles = StyleSheet.create({
   width80: {
    width: 80
   },
   margin10: {
       margin: 10
   },

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  
});