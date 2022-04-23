import { useState } from "react";
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import logo from "../../../assets/Login/clara.jpg";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { theme } from "../../global/theme";
import { 
  Container, 
  Content, 
  Title, 
  ButtonTitle, 
  Image, 
  Subtitle, 
  ContainerFooter,
  Wrapper
} from "./styles";

export default function SignUp() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
      <StatusBar backgroundColor='transparent' style='dark' translucent />
        <TouchableOpacity
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
        </TouchableOpacity>
        <Content>
          <Wrapper>
            <Image source={logo} />
          </Wrapper>

          <Title>Cadastro</Title>
          <Subtitle>Crie sua conta rápido e fácil!</Subtitle>

          <Input
            iconName='user'            
            placeholder='Nome completo'
          />

          <Input
            iconName='mail'
            placeholder='E-mail'
            keyboardType='email-address'
          />
          <Input
            iconName='phone'
            placeholder='Telefone'
            keyboardType='numeric'
          />
          <Input
            iconName='lock'
            placeholder='Senha'
            secureTextEntry
          />

          {/* <Button>
            <ButtonTitle>Cadastrar</ButtonTitle>
          </Button> */}
          <Button 
            title='Cadastrar' 
            style={{marginTop: 20}}
          />

          <ContainerFooter>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <ButtonTitle>JÁ POSSUO UMA CONTA</ButtonTitle>
            </TouchableOpacity>
          </ContainerFooter>       
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}