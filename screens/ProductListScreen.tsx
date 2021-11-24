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
import { ProductsContext } from "../components/context/provider";
import { ListItem } from "../components/lists/List";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import { tokens } from "../language/appStructure";
import { translate } from "../language/language";

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
        onLongPress={() => {
          setSelectedItem(item.id);
          showDialog();
        }}
        onPress={() => {
          props.navigation.navigate("AddProductListScreen", {
            item: {
              id: item.id,
              name: item.name,
              price: item.price,
              type: item.type,
            },
            add: false,
          });
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
        <Text style={styles.containerText}>
          {translate(tokens.screens.productListScreen.Name)}{" "}
        </Text>
        <Text style={styles.containerText}>
          {translate(tokens.screens.productListScreen.Type)}
        </Text>
        <Text style={styles.containerText}>
          {translate(tokens.screens.productListScreen.Price)}
        </Text>
      </View>
      <Divider />
      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {" "}
            {translate(tokens.screens.productListScreen.NoProducts)}
          </Text>
        }
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.IconContainer}>
        <MaterialIcons
          name="add-circle"
          color={"green"}
          size={60}
          onPress={() =>
            props.navigation.navigate("AddProductListScreen", {
              item: {
                id: 0,
                name: "",
                price: 0,
                type: 0,
              },
              add: true,
            })
          }
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
              <Text style={styles.dialogTitle}>
                {translate(tokens.screens.addProductListScreen.Delete)}
              </Text>
              <Dialog.Content>
                <Paragraph style={styles.dialogText}>
                  {translate(tokens.screens.productListScreen.SureDelete)}
                </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color={"red"} onPress={hideDialog}>
                  {translate(tokens.screens.addProductListScreen.Cancel)}
                </Button>
                <Button
                  color={"red"}
                  onPress={() => {
                    deleteProduct(selectedItem);
                    hideDialog();
                  }}
                >
                  {translate(tokens.screens.addProductListScreen.Delete)}🗑️
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
  emptyText: {
    textAlign: "center",
    marginTop: "50%",
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
  containerText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  dialogTitle: {
    padding: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  dialogText: {
    paddingTop: 20,
    color: "black",
  },

  dialog: {
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13,
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
