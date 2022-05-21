import React, { useState, useEffect, useRef } from "react";
import {
  TextInputProps,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Switch,
  Modal,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { theme } from "../../global/theme";
import {
  Container,
  CheckBoxContainer,
  TextSwap,
  Title,
  Subtitle,
  CheckBoxWrapper,
  CheckBoxText,
  Content,
  Wrapper,
  CheckBoxCategotyContainer,
  CheckBoxCategotyContent,
  styles,
  ContainerTitle,
  Viewb,
  Button2,
  LayoutImage,
  ImagePlant,
} from "./styles";
import { InputRegister } from "../../components/InputRegister";
import { Button } from "../../components/Button";
import { InputDescription } from "../../components/InputDescription";
import { convertToObject } from "typescript";
import { Background } from "./../../components/Background/index";
import * as ImagePicker from "expo-image-picker";
import { getPlant, postPost } from "../../Db/axiosController";

export default function RegisterPlant({ route, navigation }) {
  let plant = route.params.plant;
  let user = route.params.user;

  const [checked, setChecked] = useState("first");
  const [checkedCategory, setCheckedCategory] = useState("first");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }
  const [selectedPlant, setSelectPlant] = useState({});
  function pushDataPlant(id: number) {
    getPlant(id)
      .then((resp) => {
        // setSelectPlant(resp);
        setSelectPlant(resp);
      })
      .catch((error) => {
        error;
      });
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //Dados Modal
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const DATA = plant;
  const [itemName, setItemName] = useState("");

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <Viewb style={[styles.item, backgroundColor]}>
      <Button2 onPress={onPress} style={[styles.title, textColor]}>
        {item.name}
      </Button2>
    </Viewb>
  );
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#1b4e2c" : "#ecffdc";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => [
          setSelectedId(item.id),
          setVisible(false),
          setItemName(item.name),
          pushDataPlant(item.id),
        ]}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  //image picker
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // Postdata
  function postData(
    idUser: number,
    plantId: number,
    plantName: string,
    image: string,
    valor: number,
    troca: boolean
  ) {
    if (valor == null) {
      Alert.alert("Valor incorreto ou inválido");
    } else if (plantId == null) {
      Alert.alert("Planta não selecionada");
    } else if (image == null) {
      Alert.alert("Imagem não selecionada");
    } else{
      const val = valor.toString().replace(",",".")
      console.log(idUser, plantId, plantName, image, valor, troca)
      postPost(idUser, plantId, plantName, image, Number(val), troca);
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="transparent" style="dark" translucent />

      <Title>Cadastre sua planta!</Title>
      <Subtitle>
        Preenchendo os campos com o máximo {"\n"}de detalhes possíveis
      </Subtitle>

      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Modal animationType="slide" transparent={true} visible={visible}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setVisible(false);
                }}
              >
                <View
                  style={{
                    padding: 10,
                    margin: 10,
                    height: 300,
                    borderRadius: 10,

                    alignItems: "center",
                    backgroundColor: `${theme.color.white}`,
                    opacity: 0.9,
                  }}
                >
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <Button
              title={itemName ? itemName : "Escolha sua planta"}
              color="."
              onPress={() => {
                setVisible(true);
              }}
            />

            <Button
              title={"Selecione uma imagem"}
              color="."
              onPress={() => {
                pickImage();
              }}
            />

            <LayoutImage>
              <ImagePlant source={{ uri: image }}></ImagePlant>
            </LayoutImage>

            <InputRegister
              placeholder="R$ Valor sugerido"
              value={price}
              keyboardType="numeric"
              onChangeText={(prop) => setPrice(prop)}
            />

            <CheckBoxContainer>
              <TextSwap>Disponível para troca?</TextSwap>
              <Switch
                trackColor={{
                  false: "#767577",
                  true: theme.color.greenLight,
                }}
                thumbColor={isEnabled ? "#cbe6de" : "#cbe6de"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </CheckBoxContainer>
            <Button title="Cadastrar!" onPress={() => {postData(user.id,selectedId,itemName,image,price,isEnabled)}} />
          </Wrapper>
        </ScrollView>
      </Content>
    </Container>
  );
}
