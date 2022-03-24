import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, Container, Content, Form, Title, Text } from "./styles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Content>
        <Title>CADASTRO</Title>

        <Form>
          <Input
            iconName='user'
            value={name}
            placeholder='Nome Completo'
            onChangeText={setName}
          />

          <Input
            iconName='mail'
            value={email}
            placeholder='E-mail'
            onChangeText={setEmail}
            keyboardType='email-address'
          />
          <Input
            iconName='phone'
            value={phone}
            placeholder='Telefone'
            onChangeText={setPhone}
            keyboardType='numeric'
          />
          <Input
            iconName='lock'
            value={password}
            placeholder='Senha'
            onChangeText={setPassword}
            secureTextEntry
          />
        </Form>

        <Button>
          <Text>Cadastrar</Text>
        </Button>

      </Content>


      {/* <Content>
        <Text>Nome completo</Text>
        <InputText />
        <Text>Email</Text>
        <InputText />
        <Text>Telefone celular</Text>
        <InputText />
        <Text>Senha</Text>
        <InputText />
        <Text>Confirmar senha</Text>
        <InputText />
      </Content> */}
    </Container>
  )
}