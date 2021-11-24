import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StackScreens } from "../components/helpers/types";
import { Divider, List } from "react-native-paper";
import ProductsProvider, {
  ProductsContext,
} from "../components/context/provider";
import { ListItem } from "../components/lists/List";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";

export const ProductListScreen: React.FC<
  NativeStackScreenProps<StackScreens, "ProductListScreen">
> = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [selectedItem, setSelectedItem] = React.useState(0);

  const { products, deleteProduct } = useContext(ProductsContext);
  const renderItem = ({ item }: { item: ListItem }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item.id);
          showDialog();
        }}
      >
        <ListItem
          id={item.id}
          name={item.name}
          price={item.price}
          type={item.type}
          onClick={() => {}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.containerText}>Name </Text>
        <Text style={styles.containerText}>Type</Text>
        <Text style={styles.containerText}>Price</Text>
      </View>
      <Divider />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.IconContainer}>
        <MaterialIcons
          name="add-circle"
          color={"green"}
          size={60}
          onPress={() => props.navigation.navigate("AddProductListScreen")}
        ></MaterialIcons>
      </View>
      <Provider>
        <View>
          <Portal>
            <Dialog
              style={styles.dialog}
              visible={visible}
              onDismiss={hideDialog}
            >
              <Dialog.Title style={styles.dialogText}>Delete</Dialog.Title>
              <Dialog.Content>
                <Paragraph style={styles.dialogText}>
                  Are you sure you want to delete {} item?
                </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color={"red"} onPress={hideDialog}>
                  Cancel
                </Button>
                <Button
                  color={"red"}
                  onPress={() => {
                    deleteProduct(selectedItem);
                    hideDialog();
                  }}
                >
                  Delete🗑️
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    fontWeight: "bold",
    fontSize: 14
  },
  dialogText: {
    color: "black",
  },

  dialog: {
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13
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
