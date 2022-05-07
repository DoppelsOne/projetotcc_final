import React, { useState, useEffect } from "react";
import {
  Alert,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";

import logo from "../../../assets/Login/clara.jpg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";
import {
  Container,
  TextFooter,
  Content,
  Title,
  ButtonTitle,
  Image,
  Subtitle,
  ContainerFooter,
  Wrapper,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { postCadastro, getCep } from "../../Db/axiosController";





export default function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [senha, setSenha] = useState("");
  const [confirm, setConfirmSenha] = useState("");
  const [cep, setCep] = useState("");
  //validar senha
  const validate = false;

  // if (senha == confirm){
  //   const validate = true
  //   return validate
  // }

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
          <Image source={logo} />
          <Title>Cadastro</Title>
          <Subtitle>Crie sua conta rápido e fácil!</Subtitle>
        </Wrapper>

        <Content>
          <Input
            iconName="user"
            placeholder="Usuário"
            onChangeText={(prop) => {
              setUsuario(prop);
            }}
          />

          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={(prop) => {
              setEmail(prop);
            }}
          />
          <Input
            iconName="phone"
            placeholder="Telefone"
            keyboardType="numeric"
            onChangeText={(prop) => {
              setTel(prop);
            }}
          />
          <Input
            iconName="map"
            placeholder="CEP"
            keyboardType="numeric"
            onChangeText={(prop) => {
              setCep(prop);
            }}
          />

          <Input
            iconName="lock"
            placeholder="Senha"
            secureTextEntry
            onChangeText={(prop) => {
              setSenha(prop);
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
              postCadastro(usuario, email, tel, cep ,senha);
              // Alert.alert()
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <TextFooter>JÁ POSSUO UMA CONTA</TextFooter>
          </TouchableOpacity>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
