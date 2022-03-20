import React, { useState } from "react";
import { Animated, StyleSheet, Keyboard,KeyboardType} from "react-native";
import {
  Container,
  Input,
  InputText,
  Link,
  Form,
  TextBtn,
  Image,
} from "./styles-login";
import { StatusBar } from "expo-status-bar";
// import {SafeAreaView} from 'react-native-safe-area-context'
import logo from "../../../assets/Login/clara.jpg";

export default function Login() {
  
  // const [cont, setcont] = useState(new Animated.Value(0));

  // Animated.timing(cont,{toValue:1,duration:1000}).start;

  return (
    <Container>
      <StatusBar backgroundColor="transparent" style="light" translucent />
      <Image source={logo} />
      <InputText placeholder='Usuário' />
      <InputText placeholder="Senha"/>
      <Form>
        <Input onPress={Keyboard.dismiss} accessible={false}>
          <TextBtn>Login</TextBtn>
        </Input>
        <Input onPress={Keyboard.dismiss} accessible={false}>
          <TextBtn>Cadastrar</TextBtn>
        </Input>
      </Form>
      <Link>Esqueceu sua senha?</Link>
    </Container>
  );
}

