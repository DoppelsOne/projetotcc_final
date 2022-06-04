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
  KeyboardAvoidingView,
  Platform,
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
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { empty } from "@prisma/client/runtime";
import * as ImagePicker from "expo-image-picker";
import { alterUser, getCep } from "../../Db/axiosController";

export default function Setting({ route, navigation }) {
  const user = route.params.user;

  const modalizeRef = useRef<Modalize>(null);
  const modalizeRefTwo = useRef<Modalize>(null);

  const [nsenha, setNSenha] = useState("");
  const [rsenha, setRSenha] = useState("");
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [cep, setCep] = useState(""); //cep
  const [end, setEnd] = useState(""); //logradouro
  const [cidade, setCidade] = useState(""); //localidade
  const [bairro, setBairro] = useState(""); //bairro
  const [uf, setUf] = useState(""); //uf

  useEffect(() => {}, []);

  // Avatar

  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  // validação de dados
  let valid;
  function validacao() {
    if (!isEmpty(nsenha) || !isEmpty(rsenha)) {
      if (nsenha == rsenha) {
        console.table("Dados Conferem");
        return (valid = true);
      } else {
        return (valid = false);
      }
    }
  }
  validacao();
  function updateData(nome: String, tel, cep, avatar, nsenha) {
    if (
      !isEmpty(nome) ||
      !isEmpty(tel) ||
      !isEmpty(cep) ||
      !isEmpty(avatar) ||
      !isEmpty(nsenha)
    ) {
      if (isEmpty(nome)) {
        nome = user.login;
      }
      if (isEmpty(tel)) {
        tel = user.tel;
      }
      if (isEmpty(cep)) {
        cep = user.Endereco.cep;
      }
      if (isEmpty(avatar)) {
        avatar = user.avatar;
      }
      if (isEmpty(nsenha)) {
        nsenha = user.senha;
      }

      console.log(user.id, nome, tel, avatar, nsenha, cep);
      alterUser(user.id, nome, tel, nsenha, avatar, cep);
    }

    function limpeza() {
      setNSenha("");
      setAvatar(null);
      setNome("");
      setTel("");
      setCep("");
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background>
          <Content>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                pickImage();
              }}
              style={{
                alignItems: "center",
                marginBottom: 10,
                marginHorizontal: 80,
              }}
            >
              <AvatarView>
                <Avatar
                  source={
                    avatar == null
                      ? require("../../../assets/Avatar/avatarStandard.jpg")
                      : user.avatar
                      ? { uri: user.avatar }
                      : { uri: avatar }
                  }
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
                  onChangeText={(props) => {
                    setTel(props);
                  }}
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
                  onChangeText={(props) => {
                    setCep(props);
                    if (props.length >= 8) {
                      getCep(props).then((resp) => {
                        setBairro(resp?.bairro);
                        setEnd(resp?.logradouro);
                        setCidade(resp?.localidade);
                        setUf(resp?.uf);
                      });
                    }
                  }}
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
            <InputRegister
              place={end ? end : user.Endereco.endereco}
              editable={false}
            />

            <InputRegister
              place={bairro ? bairro : user.Endereco.bairro}
              editable={false}
            />

            <Wrap>
              <View style={{ width: "77%" }}>
                <InputRegister
                  place={cidade ? cidade : user.Endereco.cidade}
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
                  place={uf ? uf : user.Endereco.uf}
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

            <Button
              title="Salvar alterações"
              style={{ marginTop: 22 }}
              onPress={() => {
                updateData(nome, tel, cep, avatar, nsenha);
              }}
            />

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
        withHandle={false}
        // snapPoint={400}
        modalHeight={600}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={70}
        >
          <View
            style={{
              flex: 1,
              padding: 14,
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
                secureTextEntry={true}
                placeholderTextColor={theme.color.gray}
                onChangeText={(prop) => {
                  setNSenha(prop);
                }}
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
                secureTextEntry={true}
                onChangeText={(props) => {
                  setRSenha(props);
                }}
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
            {valid ? (
              <Text
                style={{
                  color: theme.color.greenLight,
                  fontFamily: theme.fonts.poppins_500,
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 8,
                }}
              >
                Dados Conferem!!!
              </Text>
            ) : (
              <Text></Text>
            )}
            <Button
              title="Alterar senha"
              style={{}}
              onPress={() => {
                modalizeRef.current?.close();
              }}
            />
          </View>
        </KeyboardAvoidingView>
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
                const removeValue = async () => {
                  try {
                    await AsyncStorage.removeItem("@User");
                  } catch (e) {
                    // remove error
                  }
                  console.log("Usuário Desconectado");
                };
                removeValue();
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
