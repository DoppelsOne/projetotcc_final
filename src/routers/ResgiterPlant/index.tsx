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
} from "./styles";
import { InputRegister } from "../../components/InputRegister";
import { Button } from "../../components/Button";
import { InputDescription } from "../../components/InputDescription";
import { convertToObject } from "typescript";
import { Background } from "./../../components/Background/index";
import * as ImagePicker from 'expo-image-picker';


export default function RegisterPlant({ route, navigation }) {
  let plant = route.params.plant;

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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //Dados Modal
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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
        ]}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  //image picker
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
              title={itemName ? itemName : "Selecione uma imagem"}
              color="."
              onPress={() => {
                pickImage();
              }}
            />

            <InputRegister
              placeholder="R$ Valor sugerido"
              value={price}
              onChangeText={setPrice}
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
            <Button title="Cadastrar!" />
          </Wrapper>
        </ScrollView>
      </Content>
    </Container>
  );
}
