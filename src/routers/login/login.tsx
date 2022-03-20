import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Title, Input, InputText, Link, Form } from "./styles-login";
import {StatusBar} from 'expo-status-bar'


export default function Login() {
  return (
    <Container>
      <StatusBar style="light" translucent/>
      <Title>teste</Title>
      <InputText />
      <InputText />
      <Form>
      <Input><Text>Login</Text></Input>
      <Input><Text>Cadastrar</Text></Input>
      </Form>
      <Link/>
    </Container>
  );
}

