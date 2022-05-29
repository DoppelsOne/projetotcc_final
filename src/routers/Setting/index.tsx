import React, { useRef, useState, useEffect } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Settings,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { InputRegister } from "../../components/InputRegister";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";

import { isEmpty } from "lodash";

import {
  Container,
  Content,
  // Image,
  Avatar,
  TextEditPhoto,
  // ImgView,
  AvatarView,
  Wrap,
  TextDesconect,
  TextchangePassword,
  Password,
} from "./styles";

export default function Setting({ route, navegation }) {
  const user = route.params.user;

  const modalizeRef = useRef<Modalize>(null);
  const modalizeRefTwo = useRef<Modalize>(null);

  // const name_ =  user.login
  // const telefone_ = user.tel
  // const cep_ = user.cep
  // const endereco_ = user.Endereco.endereco
  // const bairro_ = user.Endereco.bairro
  // const uf_ = user.Endereco.uf

  const [senha, setSenha] = useState();
  const [imagem, setImagem] = useState();

  const [nome, setNome] = useState(user.login);
  const [tel, setTel] = useState();
  const [cep, setCep] = useState();
  const [end, setEnd] = useState();
  const [bairro, setBairro] = useState();
  const [uf, setUf] = useState();

  useEffect(() => {
    {
      // const nome_ = user.login;
      // const tel_ = user.tel;
      // const cep_ = user.cep;
      // const end_ = user.Endereco.endereco;
      // const bairro_ = user.Endereco.bairro;
      // const uf_ = user.Endereco.uf;
    }
  }, []);

  function validacao(nsenha, rsenha) {}



  function updateData(nome, tel, cep, image, nsenha) {

    
  }

  // setTel(user.tel);
  // setCep(user.cep);
  // setEnd(user.Endereco.endereco);
  // setBairro(user.Endereco.bairro);
  // setUf(user.Endereco.uf);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background>
          <Content>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={{
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 80,
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
              place={user.login}
              onChangeText={(prop) => {
                setNome(prop);
              }}
            />

            <Wrap>
              <View style={{ width: "57%" }}>
                <InputRegister
                  place={user.tel}
                  keyboardType="numeric"
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View style={{ width: "40%", marginLeft: 10 }}>
                <InputRegister
                  place={user.Endereco.cep}
                  keyboardType="numeric"
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    paddingLeft: 10,
                  }}
                />
              </View>
            </Wrap>
            <InputRegister place={user.Endereco.endereco} editable={false} />

            <InputRegister place={user.Endereco.bairro} editable={false} />

            <Wrap>
              <View style={{ width: "77%" }}>
                <InputRegister
                  place={user.Endereco.cidade}
                  editable={false}
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    paddingLeft: 10,
                  }}
                />
              </View>
              <View style={{ width: "20%", marginLeft: 10 }}>
                <InputRegister
                  editable={false}
                  place={user.Endereco.uf}
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
              </View>
            </Wrap>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                modalizeRef.current?.open();
              }}
              style={{
                marginTop: 12,
                backgroundColor: theme.color.overlay,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: theme.color.purpleDark,
                padding: 8,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Password>********</Password>
              <TextchangePassword>Alterar senha</TextchangePassword>
            </TouchableOpacity>

            <Button title="Salvar alterações" style={{ marginTop: 22 }} />

            <TouchableOpacity
              onPress={() => {
                modalizeRefTwo.current?.open();
              }}
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                borderColor: theme.color.whiteHeading,
                flexDirection: "row",
                marginHorizontal: 80,
              }}
            >
              <Feather
                name="log-out"
                size={22}
                color={theme.color.whiteHeading}
                style={{ marginRight: 5 }}
              />
              <TextDesconect>DESCONECTAR</TextDesconect>
            </TouchableOpacity>
          </Content>
        </Background>
      </TouchableWithoutFeedback>

      <Modalize
        ref={modalizeRef}
        snapPoint={570}
        withHandle={true}
        tapGestureEnabled={true}
      >
        <View
          style={{
            flex: 1,
            padding: 12,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                modalizeRef.current?.close();
              }}
            >
              <AntDesign
                name="close"
                size={22}
                color={theme.color.purpleDark}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 18,
              fontFamily: theme.fonts.poppins_700bold,
              color: theme.color.purpleDark,
              textAlign: "center",
            }}
          >
            Digite uma nova senha
          </Text>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TextInput
              placeholder="Senha"
              placeholderTextColor={theme.color.gray}
              style={{
                width: "100%",
                fontSize: 16,
                fontFamily: theme.fonts.poppins_500,
                color: theme.color.purpleDark,
                backgroundColor: theme.color.white,
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
              }}
            />
            <TextInput
              placeholder="Confirmar senha"
              placeholderTextColor={theme.color.gray}
              style={{
                width: "100%",
                fontSize: 16,
                fontFamily: theme.fonts.poppins_500,
                color: theme.color.purpleDark,
                backgroundColor: theme.color.white,
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                marginTop: 10,
              }}
            />
          </View>

          <Button title="Atualizar" style={{ marginTop: 30 }} />
        </View>
      </Modalize>

      <Modalize ref={modalizeRefTwo} snapPoint={200} withHandle={false}>
        <View
          style={{
            flex: 1,
            padding: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: theme.fonts.poppins_700bold,
              color: theme.color.purpleDark,
            }}
          >
            Sair da conta?
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Button
              onPress={() => {
                navigation.navigate("Login");
              }}
              title="Sair"
              style={{ width: "45%", marginRight: 10 }}
            />
            <Button
              onPress={() => {
                modalizeRefTwo.current?.close();
              }}
              title="Cancelar"
              style={{ width: "45%" }}
            />
          </View>
        </View>
      </Modalize>
    </>
  );
}
