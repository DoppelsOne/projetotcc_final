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
import { getPosts, getUser, getCat } from "../../Db/axiosController";
import { Avatar } from "./../../components/Avatar/index";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ route, navigation }) {
  const { green, greenDark } = theme.color;

  let data;
  const user = route.params.user;
  const log = user.login.charAt(0).toUpperCase() + user.login.slice(1);
  if (user.avatar == null) {
    data = user.avatar = "";
  } else {
    data = user.avatar;
  }

  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState();
  const [category, setCate] = useState();
  const [cat, setCat] = useState("Todas");
 
  // console.log(search);

  useFocusEffect(
    React.useCallback(() => {
      getPosts(cat, search).then((resp) => {
        setPosts(resp);
      });
      getCat().then((resp) => {
        setCate(resp);
      });
      
    }, [search, cat])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={styles.container}>
          <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
            <View style={styles.header}>
              <Profile login={log} avat={data} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <SearchBar setSe={setSearch} />

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
          <PlantCardFilter horizontal categorias={category} select={setCat} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <PlantCardPrimary posts={posts} />
            {/* <View
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
            </View> */}
          </ScrollView>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
}
