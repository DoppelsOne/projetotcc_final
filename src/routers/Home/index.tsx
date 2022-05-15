import { LinearGradient } from "expo-linear-gradient";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import { Background } from "../../components/Background";
import { PlantCardFilter } from "../../components/PlantCardFilter";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { PlantCardSecundary } from "../../components/PlantCardSecundary";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { theme } from "../../global/theme";
import { styles } from "./styles";
import { getUser } from "../../Db/axiosController";
import { Avatar } from './../../components/Avatar/index';

export default function Home({ route, navigation }) {
  const { green, greenDark } = theme.color;
  let data;
  const user = route.params.user;
  const log = user.login.charAt(0).toUpperCase() + user.login.slice(1)
  if (user.avatar == null){
    data = user.avatar = ''
  }else{
    data = user.avatar
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={styles.container}>
          <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
            <View style={styles.header}>
              <Profile
                login={log}
                avat={data}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SearchBar />
              <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                  // style={styles.buttonRegister}
                  style={styles.filterIcon}
                  colors={[green, greenDark]}
                >
                  <Feather
                    name="sliders"
                    size={22}
                    color={theme.color.whiteHeading}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <PlantCardFilter horizontal />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>Populares</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.seeMore}>Ver mais</Text>
              </TouchableOpacity>
            </View>

            <PlantCardPrimary />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>Perto de você</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.seeMore}>Ver mais</Text>
              </TouchableOpacity>
            </View>
            <PlantCardSecundary horizontal />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>Raras</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.seeMore}>Ver mais</Text>
              </TouchableOpacity>
            </View>
            <PlantCardSecundary horizontal />
          </ScrollView>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
}
