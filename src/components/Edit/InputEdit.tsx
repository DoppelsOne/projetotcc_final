import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { wrap } from "lodash";
import { theme } from "./../../global/theme";
import { deletePost } from "../../Db/axiosController";

const InputEdit = (id: any) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.edit} onPress={() => {}}>
        <Feather name="edit" size={40} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.remove}
        onPress={() => {
          deletePost(id.id), console.log(id.id);
        }}
      >
        <Feather name="x" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default InputEdit;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: "orange",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    height: `100%`,
    width: 50,
  },
  edit: {
    opacity: 0.7,
    flex: 1,
    backgroundColor: "#09ffff",
    borderTopRightRadius: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
  },
  remove: {
    opacity: 0.7,
    flex: 1,
    backgroundColor: theme.color.orange,
    borderBottomRightRadius: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
  },
});
