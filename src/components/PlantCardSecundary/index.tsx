import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
<<<<<<< HEAD
  Pressable,
  Modal,
  Animated,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { RectButton } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

=======
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c
import { theme } from "../../global/theme";
import { 
  styles,
  Wrapper,
  ImagePlant,
  LayoutImage,
  CheckBoxContainer,
  TextSwap
} from "./styles";
import { Button } from "../Button";
import InputEdit from "./../Edit/InputEdit";
<<<<<<< HEAD
import { deletePost, postPost } from "../../Db/axiosController";
import { useNavigation } from "@react-navigation/native";
=======
import { deletePost } from "../../Db/axiosController";
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c

export function PlantCardSecundary({ id, posts, route, ...rest }: any) {
  // let plant = route.params.plant;
  // let user = route.params.user;

<<<<<<< HEAD
=======
export function PlantCardSecundary({ posts, setDelete, ...rest }, navigation) {
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dados = posts;
<<<<<<< HEAD

  const modalizeRef = useRef<Modalize>(null)
  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedPlant, setSelectPlant] = useState({});

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const navigation = useNavigation()

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
    } else {
      const val = valor.toString().replace(",", ".");
      console.log(idUser, plantId, plantName, image, valor, troca);
      postPost(idUser, plantId, plantName, image, Number(val), troca);
      navigation.goBack()
    }
  }


  // console.log(dados)
=======
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c

  // console.log(dados3.map(d=>d.id))

  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      title={item.title}
      valor={item.valor}
      image={item.image}
      troca={item.troca}
      category={item.Categorias}
    />
  );

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState("");

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  const Item = ({ id, title, valor, image, troca, category }: any) => (
    <>   
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.background}>
          <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.information}>
              <Text style={styles.text}>{category}</Text>
              <Text style={styles.title}>{title}</Text>

              <View style={styles.contentText}>
                <Text style={styles.text}>Valor</Text>
                <Text style={styles.price}>R$ {valor}</Text>
              </View>
            </View>
<<<<<<< HEAD
            <View>
              {/* <InputEdit id={id} /> */}
              <View style={styles.contentEditDelete}>
                <TouchableOpacity 
                  style={styles.edit} 
                  onPress={() => {modalizeRef.current?.open()}}
                  activeOpacity={0.7}
                >
                  <Feather name="edit" size={22} color={theme.color.whiteHeading} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.remove}
                  onPress={() => {setModalVisible(true)}}
                  activeOpacity={0.7}
                >
                  <Feather name="trash" size={22} color={theme.color.whiteHeading} />
                </TouchableOpacity>
              </View>
            </View>
          </View>        
=======
          </View>
          <View>
            <View style={styles.content}>
              <TouchableOpacity style={styles.edit} onPress={() => {}}>
                <Feather name="edit" size={40} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.remove}
                onPress={() => {
                deletePost(id), setDelete("update");
                }}
              >
                <Feather name="x" size={40} />
              </TouchableOpacity>
            </View>
          </View>
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c
        </View>
      </TouchableOpacity>        
    </>
  );

  return (
<<<<<<< HEAD
    <>
      <FlatList      
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        {...rest}
      /> 

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text 
                style={{
                  fontSize: 16,
                  fontFamily: theme.fonts.poppins_700bold,
                  color: theme.color.purpleDark,
                }}
              >
                Deseja excluir .. ?
              </Text>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Button
                  title='Sim'
                  onPress={() => deletePost(id.id)}
                  style={{ width: "45%", marginRight: 10 }}
                />
                <Button
                  title='Não'
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{ width: "45%" }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <Modalize 
        ref={modalizeRef} 
        withHandle={false}
        modalHeight={700}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={70}
        >
          <View style={{ alignItems: "flex-end", paddingRight: 14, paddingTop: 14 }}>
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

          <View
            style={{
              flex: 1,
              padding: 14,
              alignItems: 'center',
            }}
          >   
            <ScrollView showsVerticalScrollIndicator={false}>
            <Wrapper>
              {image && (
                <LayoutImage>
                  <ImagePlant source={{ uri: image }}></ImagePlant>
                </LayoutImage>
              )}
              <Button
                title={"Selecione uma imagem"}
                color="."
                onPress={() => {
                  pickImage();
                }}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  modalizeRef.current?.open();
                }}
                style={[
                  styles.buttonPlant,
                  itemName && { borderColor: theme.color.greenLight },
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
                    width: "90%",
                  }}
                >
                  {itemName && itemName}
                </TextInput>
                <View>
                  <Feather name="chevron-up" size={16} />
                  <Feather name="chevron-down" size={16} />
                </View>
              </TouchableOpacity>

              <View
                style={[
                  styles.inputPrice,
                  (isFocused || isFilled) && {
                    borderColor: theme.color.greenLight,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                    marginRight: 5,
                  }}
                >
                  R$
                </Text>
                <TextInput
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  placeholder="Valor sugerido"
                  placeholderTextColor={theme.color.gray}
                  selectionColor={theme.color.greenLight}
                  // selectionColor={theme.color.greenLight}
                  value={price || value}
                  onChangeText={(prop) => setPrice(prop)}
                  keyboardType="numeric"
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontFamily: theme.fonts.poppins_500,
                    color: theme.color.purpleDark,
                  }}
                />
              </View>

              <CheckBoxContainer>
                <TextSwap>Disponível para troca?</TextSwap>
                <Switch
                  trackColor={{
                    false: "#767577",
                    true: theme.color.greenLight,
                  }}
                  thumbColor={
                    isEnabled ? theme.color.greenWeak : theme.color.greenWeak
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </CheckBoxContainer>
              <Button
                title="Cadastrar"
                style={{ marginTop: 20 }}
                onPress={() => {
                  // postData(
                  //   user.id,
                  //   selectedId,
                  //   itemName,
                  //   image,
                  //   price,
                  //   isEnabled
                  // );
                }}
              />
            </Wrapper>
          </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modalize>     
    </>
=======
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      // contentContainerStyle={{ paddingRight: 30 }}
      onEndReachedThreshold={0.1}
      data={dados}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      {...rest}
    />
>>>>>>> fc72a75b4b2af6e213dd4c51da45252dcd7bf92c
  );
}
