import { isPlaceholder } from "@babel/types";
import { placeholder } from "i18n-js";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Badge, Card, IconButton, Title } from "react-native-paper";
import { tokens } from "../../language/appStructure";
import { translate } from "../../language/language";

export interface ListItem {
  id: number;
  name: string;
  price: number;
  type: number;
}

interface ListItemComponent extends ListItem {
  onClick: () => void;
}

export const ListItem: React.FC<ListItemComponent> = (props) => {
  const getType = (id: number) => {
    if (id === 0) {
      return "integrated";
    } else if (id === 1) {
      return "peripheral";
    } else {
      return "unknown";
    }
  };

  return (
   
    <Card.Content style={styles.card}>
      
       <Text>{props.name}</Text>
       <Text>{getType(props.type)}</Text>
       <Text>${props.price}</Text>
       
    </Card.Content>
 
  
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 9,
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
});
