import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Switch,
  FlatList,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { Modalize } from 'react-native-modalize'

import { theme } from "../../global/theme";
import { getPlant, postPost } from "../../Db/axiosController";
import { InputRegister } from "../../components/InputRegister";
import { Button } from "../../components/Button";
import {
  Container,
  CheckBoxContainer,
  TextSwap,
  Title,
  Subtitle,
  Content,
  Wrapper,
  styles,
  Button2,
  LayoutImage,
  ImagePlant,
} from "./styles";
import Feather from "react-native-vector-icons/Feather"

export default function RegisterPlant({ route, navigation }) {
  let plant = route.params.plant;
  let user = route.params.user;
<<<<<<< HEAD
  // console.log(plant)
  const [checked, setChecked] = useState("first");
  const [checkedCategory, setCheckedCategory] = useState("first");

  const [name, setName] = useState("");
=======

>>>>>>> d6a6f52cae84f1b542ea206ec88ba558232750d6
  const [price, setPrice] = useState("");
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
    <View 
      style={[ 
        styles.item, 
        backgroundColor
      ]}
    >
      <Button2 
        onPress={onPress} 
        style={textColor}
      >
        {item.name}
      </Button2>
    </View>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId 
      ? theme.color.green 
      : theme.color.white;

    const color = item.id === selectedId 
      ? theme.color.whiteHeading
      : theme.color.purpleDark;

    return (
      <Item
        item={item}
        onPress={() => [
          setSelectedId(item.id),
          setItemName(item.name),
          pushDataPlant(item.id),
          modalizeRef.current?.close()
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

  const modalizeRef = useRef<Modalize>(null)

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState('');

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  return (
    <>
      <Container>
        <StatusBar backgroundColor="transparent" style="dark" translucent />

        <Title>Cadastre {"\n"}sua planta!</Title>
        <Subtitle>
          Preenchendo os campos abaixo
        </Subtitle>

        <Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Wrapper>

              { image &&
                <LayoutImage>
                  <ImagePlant source={{ uri: image }}></ImagePlant>
                </LayoutImage>
              }
              <Button
                title={"Selecione uma imagem"}
                color="."
                onPress={() => {
                  pickImage();
                }}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {modalizeRef.current?.open()}}
                style={[
                  styles.buttonPlant,
                  (itemName) &&
                  { borderColor: theme.color.greenLight }
                ]}
              >
                <TextInput
                  editable={false}
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}                  
                  placeholder="Selecione a planta"
                  placeholderTextColor={theme.color.gray}
                  style={{
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    marginRight: 5,
                    width: '90%',
                  }}
                >
                  { itemName && itemName }
                </TextInput>
                <View>
                  <Feather
                    name='chevron-up'
                    size={16}
                  />
                  <Feather
                    name='chevron-down'
                    size={16}
                  />
                </View>
              </TouchableOpacity>

              <View
               style={[
                  styles.inputPrice,
                  (isFocused || isFilled) &&
                  { borderColor: theme.color.greenLight }
                ]}       
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    marginRight: 5
                  }}
                >
                  R$
                </Text>
                <TextInput
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  placeholder="Valor sugerido"
                  placeholderTextColor={theme.color.gray}
                  // selectionColor={theme.color.greenLight}
                  value={price || value}
                  onChangeText={(prop) => setPrice(prop)}
                  keyboardType="numeric"
                  style={{
                    width: '100%',
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark
                  }}               
                />
              </View>


<<<<<<< HEAD
            {image ? <LayoutImage>
              <ImagePlant source={{ uri: image }}></ImagePlant>
            </LayoutImage> : <></>}
            

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
            <Button title="Cadastrar!" onPress={() => {postData(user.id,selectedId,itemName,image,price,isEnabled),handleGoBack()}} />
          </Wrapper>
        </ScrollView>
      </Content>
    </Container>
=======
              <CheckBoxContainer>
                <TextSwap>Disponível para troca?</TextSwap>               
                <Switch
                  trackColor={{
                    false: "#767577",
                    true: theme.color.greenLight,
                  }}
                  thumbColor={isEnabled ? theme.color.greenWeak : theme.color.greenWeak}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </CheckBoxContainer>
              <Button title="Cadastrar!" style={{ marginTop: 20 }} onPress={() => {postData(user.id,selectedId,itemName,image,price,isEnabled)}} />
            </Wrapper>
          </ScrollView>
        </Content>
      </Container>

      <Modalize 
        ref={modalizeRef}
        snapPoint={600}
        withHandle={false}
        flatListProps={{
          data: DATA,
          renderItem: renderItem,
          keyExtractor: item => item.id,
          extraData: selectedId,
          showsVerticalScrollIndicator: false,
        }}
      />      
    </>
>>>>>>> d6a6f52cae84f1b542ea206ec88ba558232750d6
  );
}