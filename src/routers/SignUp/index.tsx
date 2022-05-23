import React, { useState, useEffect } from "react";
import {
  Alert,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { isEmpty } from "lodash";
import axios from "axios";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";
import { postCadastro, getCep } from "../../Db/axiosController";
import {
  Container,
  Content,
  Title,
  Image,
  Subtitle,
  Wrapper,
} from "./styles";

export default function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  // const [usuario, setUsuario] = useState("");
  // const [email, setEmail] = useState("");
  // const [tel, setTel] = useState("");
  // const [senha, setSenha] = useState("");
  const [confirm, setConfirmSenha] = useState("");


  const [userData, setUserData] = useState({
    usuario: "",
    email: "",
    tel: "",
    senha: "",
    cep: "",
  });

  // if (isEmpty(userData.cep)) {
  //   console.log("é nulo");
  // } else {
  //   console.log("sas");
  // }
  //Validando Campos
  async function validarCampos(props: any, confirm: string) {
    let receba = true;

    if (
      isEmpty(props.usuario) ||
      isEmpty(props.email) ||
      isEmpty(props.tel) ||
      isEmpty(props.senha) ||
      isEmpty(props.cep) ||
      isEmpty(confirm)
    ) {
      Alert.alert("Um ou mais campos sem preenchimento");
    } else if (props.senha != confirm) {
      Alert.alert("Senhas não coincidem");
    } else if (receba == true) {
      let cep = false;
      //validar Cep
      await axios
        .get("https://viacep.com.br/ws/" + props.cep + "/json/")
        .then((resp) => {
          if (resp.status == 400 || resp.data.erro) {
            cep = false;
          } else {
            cep = true;
          }
        })
        .catch((err) => {
          err;
        });

      if (!cep) {
        Alert.alert("Cep não encontrado ou inválido");
      } else {
        postCadastro(props);
        handleGoBack();
      }
    }
    //Validando Senha

    console.log(userData, confirm);

    // if (isEmpty(props.user)) {
    //   console.log("user vazio");
    // }
    // if (props.senha != props.passc) {
    //   Alert.alert("Senhas Não Coincidem");
    // } else {
    //   postCadastro(usuario, email, tel, cep, senha);
    //   handleGoBack();
    // }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor="transparent" translucent />
        {/* <TouchableOpacity
            activeOpacity={0.7}
            style={{ alignSelf: 'flex-start' }}
            onPress={handleGoBack}       
          >
            <MaterialIcons   
              name='arrow-back-ios'
              style={{
                marginHorizontal: 20,
                marginBottom: 20,
                // marginTop: -20,
                justifyContent: 'center',
                padding: 15
              }}
              color={theme.color.whiteHeading}
              size={25}
            />
          </TouchableOpacity> */}
        <Wrapper>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Login")}
            style={{
              position: 'absolute',              
              borderWidth: 1,
              borderRadius: 8,
              borderColor: theme.color.whiteHeading,
              backgroundColor: theme.color.overlay,
              top: 20,
              left: 20
            }}
          >
            <Feather
              name='chevron-left'
              size={28}
              color={theme.color.whiteHeading}
              style={{ padding: 3 }}
            />
            {/* <TextFooter>JÁ POSSUO UMA CONTA</TextFooter> */}
          </TouchableOpacity>
          <Image source={require("../../../assets/Logotipo/LogotipoPlantific.png")} />
          <Title>Cadastro</Title>
          <Subtitle>Crie sua conta rápido e fácil!</Subtitle>
        </Wrapper>

        <Content>
          <Input
            iconName="user"
            placeholder="Usuário"
            onChangeText={(prop) => {
              userData.usuario = prop;
            }}
          />

          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={(prop) => {
              userData.email = prop;
            }}
          />
          <Input
            iconName="phone"
            placeholder="Telefone"
            keyboardType="numeric"
            onChangeText={(prop) => {
              userData.tel = prop;
            }}
          />
          <Input
            iconName="map"
            placeholder="CEP"
            keyboardType="numeric"
            onChangeText={(prop) => {
              userData.cep = prop;
            }}
          />

          <Input
            iconName="lock"
            placeholder="Senha"
            secureTextEntry
            onChangeText={(prop) => {
              userData.senha = prop;
            }}
          />

          <Input
            iconName="lock"
            placeholder="Confirmar Senha"
            secureTextEntry
            onChangeText={(prop) => {
              setConfirmSenha(prop);
            }}
          />

          {/* <Button>
              <ButtonTitle>Cadastrar</ButtonTitle>
            </Button> */}
          <Button
            title="Cadastrar"
            style={{ marginTop: 15 }}
            onPress={() => {
              validarCampos(userData, confirm);
            }}
          />          
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
