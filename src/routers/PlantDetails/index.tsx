import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Content,
  Text,
  About,
  Subtitle,
  Information,
  Title,
  TextLocalization,
} from "./styles";
import { CheckoutAndPrice } from "../../components/CheckoutAndPrice";
import { theme } from "../../global/theme";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getPostId } from "../../Db/axiosController";
import { map } from "lodash";

export default function PlantDetails({ route, navigation }) {
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  const [dataPost, setDataPost] = useState({
    image: "assets/Logotipo/LogotipoPlantific.png",
    title: "",
    Planta: { Categoria: [] },
    Usuario: { Endereco: {} },
    Categorias: {},
  });
  console.log();

  useFocusEffect(
    React.useCallback(() => {
      getPostId(id).then((resp) => {
        setDataPost(resp);
      });
    }, [])
  );

  return (
    <Container>
      <View>
        <StatusBar backgroundColor="transparent" style="light" translucent />
        <Image
          // imagem
          source={{ uri: `${dataPost.image}` }}
          style={{ width: "100%", height: 350 }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ position: "absolute" }}
          onPress={handleGoBack}
        >
          <MaterialIcons
            name="arrow-back-ios"
            style={{
              marginHorizontal: 20,
              marginTop: 30,
              backgroundColor: theme.color.whiteHeading,
              borderRadius: 8,
              paddingLeft: 10,
              paddingVertical: 5,
              justifyContent: "center",
            }}
            color={theme.color.purpleDark}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Information>
            <Title>{dataPost.title}</Title>
            <Subtitle>
              {dataPost.Planta.Categoria.map((cat) => {
                return cat.category.categoria + " ";
              })}
            </Subtitle>
          </Information>
          <View>
            <About>Descrição</About>
            <Text>{}</Text>
          </View>
          <View>
            <About>Localização</About>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Subtitle>Cidade</Subtitle>
                <TextLocalization>
                  {dataPost.Usuario.Endereco.cidade}
                </TextLocalization>
              </View>
              <View>
                <Subtitle>Bairro</Subtitle>
                <TextLocalization>
                  {dataPost.Usuario.Endereco.bairro}
                </TextLocalization>
              </View>
              <View>
                <Subtitle>UF</Subtitle>
                <TextLocalization>
                  {dataPost.Usuario.Endereco.uf}
                </TextLocalization>
              </View>
            </View>
          </View>
        </ScrollView>
      </Content>

      <CheckoutAndPrice
        value={dataPost.valor}
        numero={dataPost.Usuario.tel}
        planta={dataPost.title}
        name={dataPost.Usuario.login}
      />
    </Container>
  );
}
