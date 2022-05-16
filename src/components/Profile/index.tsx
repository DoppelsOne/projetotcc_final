import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../../global/theme";
import { Avatar } from "../Avatar";
import { styles } from "./styles";
import { Image, ImgView } from "../Avatar/styles";
import avatarr from "../../../assets/Avatar/avatarStandard.jpg";

export function Profile(props: any) {
  const name = props.login;
  const user = props.avat;
  JSON.stringify(user.avatar);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, {name}</Text>
        <Text style={styles.subtitle}>Está procurando por plantas?</Text>
      </View>
      <ImgView>
        <Image
          source={
            user == ""
              ? require("../../../assets/Avatar/avatarStandard.jpg")
              : { uri: JSON.stringify(user) }
          }
        />
      </ImgView>
      {/* <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.7} style={{marginRight: 5}}>
          <Feather 
            name='plus'
            size={28}
            color={theme.color.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
