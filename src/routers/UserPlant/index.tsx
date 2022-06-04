import React, { useState, useEffect } from "react";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

import { PlantCardSecundary } from "../../components/PlantCardSecundary";
import { Profile } from "../../components/Profile";
import { getPlant, getPlants, getPostsUser } from "../../Db/axiosController";
import { theme } from "../../global/theme";
import { styles } from "./styles";
import { Background } from "../../components/Background";


export default function UserPlant({ route, navigation }) {
  const { orange, orangeDark } = theme.color;
  let data;
  const user = route.params.user;


  // const sassi = async () => {
  //   await getPostsUser(user.id).then(resp=>{setPosts(resp)})
  // };
  const [posts, setPosts] = useState();

  useEffect(() => {
    const updateData = setTimeout(() => {
      getPostsUser(user.id).then((resp) => {
        setPosts(resp);
      });
    }, 1000);

    return function myStopFunction() {
      clearTimeout(updateData);
    };
  });

  // const posts = route.params.posts;

  // const categorias = user.Postagem.map(s=>s.Planta.Categoria.category)
  // console.log(JSON.stringify(categorias))

  const log = user.login.charAt(0).toUpperCase() + user.login.slice(1);
  if (user.avatar == null) {
    data = user.avatar = "";
  } else {
    data = user.avatar;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={styles.header}>
            <Profile login={log} avat={data} />
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Suas Plantas</Text>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <PlantCardSecundary posts={posts} />
          {/* </ScrollView> */}
        </View>

        <View style={styles.buttonRegisterContainer}>
          <TouchableWithoutFeedback
            style={{}}
            onPress={() => {
              getPlants().then((resp) => {
                navigation.navigate("RegisterPlant", {
                  plant: resp,
                  user: user,
                });
              });
            }}
          >
            <LinearGradient
              style={styles.buttonRegister}
              colors={[orange, orangeDark]}
            >
              <Entypo name="plus" size={30} color={theme.color.whiteHeading} />
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
}
