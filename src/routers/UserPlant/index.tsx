<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c
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
import { deletePost, getPlant, getPlants, getPostsUser } from "../../Db/axiosController";
import { theme } from "../../global/theme";
import { styles } from "./styles";
<<<<<<< HEAD
import { Background } from "../../components/Background";

=======
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c

export default function UserPlant({ route, navigation }) {
  const { orange, orangeDark } = theme.color;
  let data;
  const user = route.params.user;

  // const sassi = async () => {
  //   await getPostsUser(user.id).then(resp=>{setPosts(resp)})
  // };
  const [posts, setPosts] = useState();
  const [update, setUpdate] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getPostsUser(user.id).then((resp) => {
        setPosts(resp);
      });
      
    }, [user,update])
  );

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
          <PlantCardSecundary posts={posts} setDelete={setUpdate}/>
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
