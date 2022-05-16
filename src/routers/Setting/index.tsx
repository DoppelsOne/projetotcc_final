import React from 'react'
import { Keyboard, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { 
  Image,
  Container,
  Content,
  Wrapper,
  Avatar,
  Title,
  Row,
  TextEditPhoto
} from './styles'
import { Background } from '../../components/Background'
// import logo from "../../../assets/Login/clara.jpg";
// import avatar from "../../../assets/Avatar/avatarStandard.jpg";
import { InputRegister } from '../../components/InputRegister';
import { theme } from '../../global/theme';
import { Button } from '../../components/Button';
import { ButtonSecondary } from '../../components/ButtonSecondary';


export default function Setting() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>      
      <Background>        
        <Container>
          {/* <Image source={logo} /> */}
        </Container>          

        <Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Wrapper>               */}
              {/* <Title>
                Dados Cadastrais
              </Title> */}
            {/* </Wrapper> */}

            <TouchableOpacity 
                activeOpacity={0.7}
                style={{
                  alignItems: 'center',
                  marginTop: 12                
                }}
            >
              {/* <Avatar source={avatar}/> */}
              <TextEditPhoto>
                Alterar foto do perfil
              </TextEditPhoto>
            </TouchableOpacity>

            <InputRegister 
              placeholder='Nome'
              // style={{ paddingTop: 10 }}
            />

            <Row>
              <InputRegister 
                placeholder='Telefone'
                style={{
                  width: 182,
                  fontSize: 16,  
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark
                }}
              />
              <InputRegister 
                placeholder='CEP'
                style={{
                  width: 125,
                  fontSize: 16,  
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark
                }}
              />
            </Row>

            <InputRegister 
              placeholder='Bairro'
              />

            <InputRegister 
              placeholder='Endereço'
              />

            <Row>
              <InputRegister 
                placeholder='Cidade'
                style={{
                  width: 202,
                  fontSize: 16,  
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark
                }}
              />
              <InputRegister 
                placeholder='UF'
                style={{
                  width: 105,
                  fontSize: 16,  
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                }}
              />
            </Row>

            <TouchableOpacity 
              activeOpacity={0.7}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 12,
                borderWidth: 2,
                borderRadius: 16,
                borderColor: theme.color.green,
                paddingBottom: 8,     
              }}
            >
              <TextEditPhoto>
                Alterar senha
              </TextEditPhoto>
            </TouchableOpacity>

            <ButtonSecondary title='Salvar alterações' style={{marginTop: 35}}/>
            <Button title='Desconectar'style={{marginTop: 20, marginBottom: 100}}/>
          </ScrollView>
        </Content>
        
      </Background>
    </TouchableWithoutFeedback>
  )
}