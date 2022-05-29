import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  Container,
  // Content,
  Image,
  // Wrapper,
  Title,
  ContainerFooter,
  TextFooter,
  ButtonFooter,
  Or,
  Subtitle,
  TextForgot,
} from "./styles";
import { theme } from "../../global/theme";
import { postLogin, getUser, getPlant } from "../../Db/axiosController";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

export default function Login({ navigation }) {
  const { green, greenDark } = theme.color;
  const [dados, setDados] = useState({ email: "", senha: "" });
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    getData();
  }, []);

  if (dados) {
    postLogin(dados.email, dados.senha).then((resp) => {
      if (resp) {
        verificar(resp);
      } else {
      }
    });
  }
  // const [cont, setcont] = useState(new Animated.Value(0));
  // Animated.timing(cont,{toValue:1,duration:1000}).start;

  //Async Storage
  const storeData = async (email, senha) => {
    try {
      const dados = {
        email: email,
        senha: senha,
      };

      const jsonValue = JSON.stringify(dados);
      await AsyncStorage.setItem("@User", jsonValue);
    } catch (error) {
      console.warn(error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@User");
      return jsonValue != null ? setDados(JSON.parse(jsonValue)) : null;
    } catch (error) {
      console.warn(error);
    }
  };

  //Validação
  function verificar(id) {
    getUser(id)
      .then((resp) => {
        if (resp) {
          storeData(resp.email, resp.senha);
          navigation.navigate("Home", { user: resp });
          setEmail("")
          setSenha("")
        } else {
          // storeData(resp);
          // navigation.navigate("Home", { user: resp });
        }
      })
      .catch((error) => {
        error;
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor="transparent" style="light" translucent />
        {/* <Wrapper> */}
        <Image
          source={require("../../../assets/Logotipo/LogotipoPlantific.png")}
        />
        <Title>Login</Title>
        <Subtitle>Para entrar na sua conta!</Subtitle>
        {/* </Wrapper> */}

        <View style={styles.form_icon}>
          <Input
            iconName="mail"
            placeholder="E-mail"
            placeholderTextColor={theme.color.white}
            onChangeText={(props) => {
              setEmail(props);
            }}
          />
          <Input
            iconName="lock"
            placeholder="Senha"
            placeholderTextColor={theme.color.white}
            secureTextEntry
            onChangeText={(props) => {
              setSenha(props);
            }}
          />

          <Button
            title="Entrar"
            onPress={() => {
              if (email == "" || senha == "") {
                console.log("Dados Faltando");
              } else {
                postLogin(email, senha).then((resp) => {
                  if (resp) {
                    verificar(resp);
                  } else {
                    console.log("Usuário não cadastrado");
                  }
                });
              }
            }}
            style={{ marginTop: 15 }}
          />

          <Or>Ou</Or>

          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              style={styles.backgroundSocialIcon}
              colors={[green, greenDark]}
            >
              <Icon style={styles.icones} name="social-facebook" />
              <Text style={styles.textSocialIcon}>Entrar com Facebook</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              style={styles.backgroundSocialIcon}
              colors={[green, greenDark]}
            >
              <Icon style={styles.icones} name="social-google" />
              <Text style={styles.textSocialIcon}>Entrar com Google</Text>
            </LinearGradient>
          </TouchableOpacity>

          <ContainerFooter>
            <ButtonFooter onPress={() => navigation.navigate("Cadastrar")}>
              <TextFooter>CADASTRE-SE</TextFooter>
            </ButtonFooter>

            <ButtonFooter onPress={() => navigation.navigate("Login")}>
              <TextForgot>Esqueci minha senha </TextForgot>
            </ButtonFooter>
          </ContainerFooter>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form_icon: {
    width: `100%`,
    flex: 1,
    flexGrow: 3,
    padding: 15,
  },

  backgroundSocialIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    padding: 10,
    borderRadius: 16,
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  icones: {
    fontSize: 26,
    color: theme.color.whiteHeading,
    marginRight: 10,
  },

  textSocialIcon: {
    fontSize: 16,
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.whiteHeading,
    marginTop: 2,
  },
});
