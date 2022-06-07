import React, { useState, useEffect } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
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
import { Container, Content, Title, Image, Subtitle, Wrapper } from "./styles";
import MaskInput, { Masks } from "react-native-mask-input";

export default function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");

  const [confirm, setConfirmSenha] = useState("");

  // if (isEmpty(userData.cep)) {
  //   console.log("é nulo");
  // } else {
  //   console.log("sas");
  // }
  //Validando Campos
  async function validarCampos(props: any, confirm: string) {
    let receba = true;
    cep.replace("-", "");
    if (
      isEmpty(usuario) ||
      isEmpty(email) ||
      isEmpty(tel) ||
      isEmpty(senha) ||
      isEmpty(cep) ||
      isEmpty(confirm)
    ) {
      Alert.alert(
        "Erro ao cadastrar",
        "Verifique se os campos estão preenchidos corretamente."
      );
    } else if (senha != confirm) {
      Alert.alert("Senhas não coincidem");
    } else if (receba == true) {
      let cepV = false;
      //validar Cep
      await axios
        .get("https://viacep.com.br/ws/" + cep + "/json/")
        .then((resp) => {
          if (resp.status == 400 || resp.data.erro) {
            cepV = false;
          } else {
            cepV = true;
          }
        })
        .catch((err) => {
          err;
        });

      if (!cepV) {
        Alert.alert("Cep não encontrado ou inválido");
      } else {
        const data = {
          tel: tel,
          usuario: usuario,
          senha: senha,
          email: email,
          cep: cep,
        };
        postCadastro(data);
        handleGoBack();
      }
    }
    //Validando Senha

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
        <TouchableOpacity
          onPress={handleGoBack}
          style={{
            position: "absolute",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.color.whiteHeading,
            backgroundColor: theme.color.overlay,
            top: 20,
            left: 20,
            marginTop: 22,
          }}
        >
          <Feather
            name="chevron-left"
            size={28}
            color={theme.color.whiteHeading}
            style={{ padding: 3 }}
          />
        </TouchableOpacity>

        <Wrapper>
          <Image
            source={require("../../../assets/Logotipo/LogotipoPlantific.png")}
          />
          <Title>Cadastro</Title>
          <Subtitle>Crie sua conta rápido e fácil!</Subtitle>
        </Wrapper>

        <KeyboardAvoidingView style={{ flex: 2 }} behavior="padding">
          <Content>
            <Input
              iconName="user"
              value={usuario}
              placeholder="Usuário"
              onChangeText={(prop) => {
                setUsuario(prop);
              }}
            />

            <Input
              iconName="mail"
              value={email}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={(prop) => {
                setEmail(prop);
              }}
            />

            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                alignItems: "center",
                borderRadius: 16,
                borderColor: theme.color.whiteHeading,
                backgroundColor: theme.color.overlay,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Feather
                name="phone"
                color={theme.color.whiteHeading}
                size={22}
              />
              <MaskInput
                placeholder="Telefone"
                placeholderTextColor={theme.color.whiteHeading}
                value={tel}
                mask={Masks.BRL_PHONE}
                keyboardType="numeric"
                onChangeText={(props) => {
                  setTel(props);
                }}
                style={{
                  fontFamily: theme.fonts.poppins_700bold,
                  color: theme.color.purpleDark,
                  fontSize: 16,
                  width: "90%",
                  paddingLeft: 25,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                alignItems: "center",
                borderRadius: 16,
                borderColor: theme.color.whiteHeading,
                backgroundColor: theme.color.overlay,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Feather name="map" color={theme.color.whiteHeading} size={22} />
              <MaskInput
                placeholder="CEP"
                placeholderTextColor={theme.color.whiteHeading}
                value={cep}
                mask={Masks.ZIP_CODE}
                keyboardType="numeric"
                onChangeText={(prop) => {
                  setCep(prop);
                }}
                style={{
                  fontFamily: theme.fonts.poppins_700bold,
                  color: theme.color.purpleDark,
                  fontSize: 16,
                  width: "90%",
                  paddingLeft: 25,
                }}
              />
            </View>
            <Input
              iconName="lock"
              value={senha}
              placeholder="Senha"
              secureTextEntry
              onChangeText={(prop) => {
                setSenha(prop);
              }}
            />

            <Input
              iconName="lock"
              value={confirm}
              placeholder="Confirmar Senha"
              secureTextEntry
              onChangeText={(prop) => {
                setConfirmSenha(prop);
              }}
            />

            <Button
              title="Cadastrar"
              style={{ marginTop: 15 }}
              onPress={() => {
                const data = {
                  tel: tel,
                  usuario: usuario,
                  senha: senha,
                  email: email,
                  cep: cep,
                };
                validarCampos(data, confirm);
              }}
            />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
