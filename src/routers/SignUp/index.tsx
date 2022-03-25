import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../assets/Login/clara.jpg";
import { Input } from "../../components/Input";
import { 
  Button, 
  Container, 
  Content, 
  Form, 
  Title, 
  ButtonTitle, 
  Image, 
  Subtitle, 
  TextFooter, 
  ContainerFooter, 
  ButtonFooter 
} from "./styles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Image source={logo} />

        <Title>Crie sua conta</Title>

        <Subtitle>Preencha os campos abaixo {`\n`}para efetuar o cadastro</Subtitle>

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
          <ButtonTitle>Cadastrar</ButtonTitle>
        </Button>

        <ContainerFooter>
          <TextFooter>Você já possui uma conta? </TextFooter>
          <ButtonFooter onPress={() => navigation.navigate('Login')}>
            <ButtonTitle>Login</ButtonTitle>
          </ButtonFooter>
        </ContainerFooter>       
      </Content>
    </Container>
  )
}