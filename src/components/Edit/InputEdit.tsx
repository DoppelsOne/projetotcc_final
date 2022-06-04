import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { wrap } from "lodash";
import { theme } from "./../../global/theme";
import { deletePost, getPostsUser } from "../../Db/axiosController";
import { useFocusEffect } from "@react-navigation/native";

const InputEdit = (id: any) => {
  const [update, setUpdate] = useState("");

  return (
    
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
