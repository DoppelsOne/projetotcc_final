import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Background } from "../../components/Background";
import { InputRegister } from "../../components/InputRegister";
import { Button } from "../../components/Button";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { theme } from "../../global/theme";

import {
  Container,
  Content,
  Image,
  Avatar,
  Title,
  Row,
  TextEditPhoto,
  ImgView,
  AvatarView,
  Viewteste,
  Textteste,
} from "./styles";

export default function Setting({ route, navegation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <Container>
          <ImgView>
            <Image
              source={require("../../../assets/Logotipo/Logotipowide.png")}
            />
          </ImgView>

          <Content>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* <Wrapper> */}
              {/* <Title>
                  Dados Cadastrais
                </Title> */}
              {/* </Wrapper> */}

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <AvatarView>
                  <Avatar
                    source={require("../../../assets/Avatar/avatarStandard.jpg")}
                  />
                </AvatarView>
                <TextEditPhoto>Alterar foto do perfil</TextEditPhoto>
              </TouchableOpacity>

              <InputRegister
                placeholder="Nome"
                // style={{ paddingTop: 10 }}
              />

              <InputRegister
                placeholder="Telefone"
                style={{
                  width: 182,
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                }}
              />
              <InputRegister
                placeholder="CEP"
                style={{
                  width: 125,
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                }}
              />

              <InputRegister placeholder="Bairro" />

              <InputRegister placeholder="Endereço" />

              <InputRegister
                placeholder="Cidade"
                style={{
                  width: 202,
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                }}
              />
              <InputRegister
                placeholder="UF"
                style={{
                  width: 105,
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_500,
                  color: theme.color.purpleDark,
                }}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                  borderWidth: 2,
                  borderRadius: 16,
                  borderColor: theme.color.green,
                  paddingBottom: 8,
                }}
              >
                <TextEditPhoto>Alterar senha</TextEditPhoto>
              </TouchableOpacity>

              <ButtonSecondary
                title="Salvar alterações"
                style={{ marginTop: 35 }}
              />
              <Button
                title="Desconectar"
                style={{ marginTop: 20, marginBottom: 100 }}
              />
            </ScrollView>
          </Content>
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}
