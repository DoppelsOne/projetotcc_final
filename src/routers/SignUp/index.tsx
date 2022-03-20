import { InputText } from "../../components/InputText";
import { Container, Content, Text, Title } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <Title>SIGNUP</Title> 

      <InputText 
        iconName="user"
        value='Nome'
      />   
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