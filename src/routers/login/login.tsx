import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Title, Input, InputText, Link, Form } from "./styles-login";

export default function Login() {
  return (
    <Container>

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

