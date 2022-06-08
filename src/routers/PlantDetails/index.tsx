import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import moment from 'moment'

import { CheckoutAndPrice } from "../../components/CheckoutAndPrice";
import { theme } from "../../global/theme";
import { getPostId } from "../../Db/axiosController";
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

export default function PlantDetails({ route, navigation }) {
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  const [dataPost, setDataPost] = useState({
    image: "assets/Logotipo/LogotipoPlantific.png",
    title: "",
    Planta: { Categoria: [], descricao: "", },
    Usuario: { login: "", avatar: "", Endereco: {} },
    Categorias: {},
    Postagem: { troca: {}, createdAt: "", Usuario: "", },
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
          style={{ width: "100%", height: 400 }}
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
            <View>
              <Title>{dataPost.title}</Title>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Subtitle>
                  {dataPost.Planta.Categoria.map((cat) => {
                    return cat.category.categoria + " ";
                  })}
                </Subtitle>
                <View>
                  <Text>
                    Troca:{" "}
                    {dataPost.troca ? (
                      <AntDesign
                        name="checkcircle"
                        size={16}
                        color={theme.color.greenSheet}
                      />
                    ) : (
                      <AntDesign
                        name="closecircle"
                        size={16}
                        color={theme.color.orangeMedium}
                      />
                    )}
                  </Text>
                </View>
              </View>
            </View>
          </Information>
          <View>
            <About>Descrição</About>
            <Text>{dataPost.Planta.descricao}</Text>
          </View>
          <View>
            <About>Dados do Vendedor</About>
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Subtitle>Vendedor</Subtitle>
                <TextLocalization>
                  {dataPost.Usuario.login}
                </TextLocalization>
              </View>          
              <View>
                <Subtitle>Data da postagem</Subtitle>
                <TextLocalization>
                  {moment(dataPost.createdAt).format('DD/MM/YYYY')}
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
