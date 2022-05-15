import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import logotipo from "../../../assets/Logotipo/Logotipowide.png";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { Image, ImgView } from "./styles";

export default function Setting({ route, navegation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={styles.container}>
          
          <ImgView>
            <Image source={logotipo} />
          </ImgView>
        
        <View style={styles.content}>
          <Text style={styles.title}>Dados Cadastrais</Text>
        </View>

        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
}
