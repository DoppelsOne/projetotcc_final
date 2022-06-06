import React, { useEffect, useState, useRef } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
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
} from "./styles";
import { theme } from "../../global/theme";
import {
  postLogin,
  getUser,
  getPlant,
  getRecPass,
  alterUserPass,
} from "../../Db/axiosController";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modalize } from "react-native-modalize";
import AntDesign from "react-native-vector-icons/AntDesign";
import { isEmpty } from "lodash";
import { useFocusEffect } from "@react-navigation/native";
// import  from '@react-navigation/native';
import MaskInput, { Masks } from "react-native-mask-input";

export default function Login({ navigation }) {
  const { green, greenDark } = theme.color;
  const [dados, setDados] = useState({ email: "", senha: "" });
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [nsenha, setNSenha] = useState("");
  const [rsenha, setRSenha] = useState("");

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
          setEmail("");
          setSenha("");
          setDados({ email: "", senha: "" });
          navigation.navigate("Home", { user: resp });
        } else {
          // storeData(resp);
          // navigation.navigate("Home", { user: resp });
        }
      })
      .catch((error) => {
        error;
      });
  }

  const modalizeRef = useRef<Modalize>(null);
  const modalizeRefTwo = useRef<Modalize>(null);

  //Recuperar Senha

  const [mail, setMail] = useState();
  const [tel, setTel] = useState();
  const [id, setId] = useState();

  // validação de dados
  let valid;

  function validacao() {
    if (!isEmpty(nsenha) || !isEmpty(rsenha)) {
      if (nsenha == rsenha) {
        return (valid = true);
      } else {
        return (valid = false), console.warn("Senha não podê ser alterada");
      }
    }
  }
  validacao();

  return (
    <>
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
              value={email}
              placeholder="E-mail"
              placeholderTextColor={theme.color.white}
              onChangeText={(props) => {
                setEmail(props);
              }}
            />
            <Input
              iconName="lock"
              value={senha}
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
                if (email == "" && senha == "") {
                  Alert.alert("Nenhum campo preenchido!", "Digite seu e-mail e senha para entrar")
                  console.log("Dados Faltando");
                } else if (senha == ''){
                  Alert.alert("Erro ao entrar", "Verifique sua senha")
                } else if (email == "") {
                  Alert.alert("Erro ao entrar", "Verifique seu e-mail ")
                } else {
                  postLogin(email, senha).then((resp) => {
                    if (resp) {
                      verificar(resp);
                    } else {
                      Alert.alert("Usuário não encontrado!", "E-mail ou senha inválido")
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

              <ButtonFooter onPress={() => modalizeRef.current?.open()}>
                <TextFooter>Esqueci minha senha </TextFooter>
              </ButtonFooter>
            </ContainerFooter>
          </View>
        </Container>
      </TouchableWithoutFeedback>

      <Modalize ref={modalizeRef} withHandle={false} modalHeight={600}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={70}
        >
          <View
            style={{
              flex: 1,
              padding: 14,
            }}
          >
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  modalizeRef.current?.close();
                }}
              >
                <AntDesign
                  name="close"
                  size={22}
                  color={theme.color.purpleDark}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: 18,
                fontFamily: theme.fonts.poppins_700bold,
                color: theme.color.purpleDark,
                textAlign: "center",
              }}
            >
              Digite seu e-mail
            </Text>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <TextInput
                placeholder="E-mail"
                placeholderTextColor={theme.color.gray}
                onChangeText={(prop) => {
                  setMail(prop);
                }}
                style={{
                  width: "100%",
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                  backgroundColor: theme.color.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                }}
              />
              <MaskInput
                mask={Masks.BRL_PHONE}
                value={tel}
                placeholder="Telefone"
                keyboardType="numeric"
                placeholderTextColor={theme.color.gray}
                onChangeText={(prop) => {
                  setTel(prop);
                }}
                style={{
                  width: "100%",
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                  backgroundColor: theme.color.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  marginTop: 10,
                }}
              />
            </View>
            {/* {valid ? (
              <Text
                style={{
                  color: theme.color.greenLight,
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 5,
                }}
              >
                Dados Conferem!!!
              </Text>
            ) : (
              <Text></Text>
            )} */}
            <Button
              title="Recuperar senha"
              style={{}}
              onPress={() => {
                getRecPass(mail, tel).then((resp) => {
                  setId(resp.id);
                  if (resp) {
                    return (
                      modalizeRefTwo.current?.open(),
                      modalizeRef.current?.close(),
                      setTel("")
                    );
                  } else {
                    return console.warn("Usuário não casdastrado");
                  }
                });
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </Modalize>

      <Modalize
        ref={modalizeRefTwo}
        withHandle={false}
        // snapPoint={400}
        modalHeight={600}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={70}
        >
          <View
            style={{
              flex: 1,
              padding: 14,
            }}
          >
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  modalizeRefTwo.current?.close();
                }}
              >
                <AntDesign
                  name="close"
                  size={22}
                  color={theme.color.purpleDark}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: 18,
                fontFamily: theme.fonts.poppins_700bold,
                color: theme.color.purpleDark,
                textAlign: "center",
              }}
            >
              Digite uma nova senha
            </Text>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <TextInput
                placeholder="Senha"
                value={nsenha}
                secureTextEntry={true}
                placeholderTextColor={theme.color.gray}
                onChangeText={(prop) => {
                  setNSenha(prop);
                }}
                style={{
                  width: "100%",
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                  backgroundColor: theme.color.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                }}
              />
              <TextInput
                placeholder="Confirmar senha"
                value={rsenha}
                secureTextEntry={true}
                onChangeText={(props) => {
                  setRSenha(props);
                }}
                placeholderTextColor={theme.color.gray}
                style={{
                  width: "100%",
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                  backgroundColor: theme.color.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  marginTop: 10,
                }}
              />
            </View>
            {valid ? (
              <Text
                style={{
                  color: theme.color.greenLight,
                  fontFamily: theme.fonts.poppins_500,
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 8,
                }}
              >
                Dados Conferem!!!
              </Text>
            ) : (
              <Text
                style={{
                  color: theme.color.orangeMedium,
                  fontFamily: theme.fonts.poppins_500,
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 8,
                }}
              >
                Dados Não Conferem!!!
              </Text>
            )}
            <Button
              title="Alterar senha"
              style={{}}
              onPress={() => {
                if (valid) {
                  alterUserPass(id, nsenha), modalizeRefTwo.current?.close();
                  setNSenha("");
                  setRSenha("");
                }
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  form_icon: {
    width: `100%`,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 15,
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
