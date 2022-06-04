import React from "react";
import { TouchableOpacity, View, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SendZap } from "../../Db/axiosController";
import { theme } from "../../global/theme";

import {
  Container,
  Title,
  Price,
  TitleButton,
  Content,
  Button,
  TypeMoney,
} from "./styles";

export function CheckoutAndPrice({ value, numero, planta, name }) {
  async function SendZap(tel, name, planta, valor) {
    const nameFormat = name.replace(" ", "%20");

    const api = "https://api.whatsapp.com/send?phone=" + tel;
    const text =
      "Olá,%20" +
      nameFormat +
      ",%20estou%20interessado(a)%20pela%20sua%20planta:%20" +
      planta +
      ".%20Por%20R$%20" +
      valor +
      ".%20(Plantific%20App%20Ltda)";

    return Linking.openURL(api + "&text=" + text);
  }

  return (
    <Container>
      <Content>
        <Title>Valor</Title>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TypeMoney>R$</TypeMoney>
          <Price>{value}</Price>
        </View>
      </Content>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          SendZap(numero, name, planta, value);
        }}
      >
        <Button>
          <FontAwesome
            name="whatsapp"
            color={theme.color.whiteHeading}
            size={20}
          />
          <TitleButton>Contato</TitleButton>
        </Button>
      </TouchableOpacity>
    </Container>
  );
}
