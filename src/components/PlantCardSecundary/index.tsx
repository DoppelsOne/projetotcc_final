import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
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
import { RectButton } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

import { theme } from "../../global/theme";
import {
  styles,
  Wrapper,
  ImagePlant,
  LayoutImage,
  CheckBoxContainer,
  TextSwap,
} from "./styles";
import { Button } from "../Button";
import InputEdit from "./../Edit/InputEdit";
import {
  deletePost,
  getPlant,
  getPlants,
  postPost,
} from "../../Db/axiosController";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from "react-native-mask-input";

export function PlantCardSecundary({
  id,
  posts,
  route,
  setDelete,
  setReg,
  ...rest
}: any) {
  // let plant = route.params.plant;
  // let user = route.params.user;

  function pushDataPlant(id: number) {
    getPlant(id)
      .then((resp) => {
        // setSelectPlant(resp);
        setSelectPlant(resp);
      })
      .catch((error) => {
        error;
      });

    // getUser(id);
  }
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dados = posts;

  const modalizeRef = useRef<Modalize>(null);
  const modalizeRef2 = useRef<Modalize>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedPlant, setSelectPlant] = useState({});
  const [del, setDel] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
      navigation.goBack();
    }
  }

  const renderItem1 = ({ item }: any) => (
    <Item
      id={item.id}
      title={item.title}
      valor={item.valor}
      image={item.image}
      troca={item.troca}
      category={item.Categorias}
      plantid={item.Planta.id}
      plantname={item.Planta.name}
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

  const Item = ({
    id,
    title,
    valor,
    image,
    troca,
    category,
    plantid,
    plantname,
  }: any) => (
    <>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.background}>
          <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.information}>
              <Text style={styles.title}>{title}</Text>

              <View style={styles.contentText}>
                <Text style={styles.text}>
                  {category.map((cat) => {
                    return cat + " ";
                  })}
                </Text>
                <Text style={styles.text}>
                  Troca:{" "}
                  {troca ? (
                    <AntDesign
                      name="checkcircle"
                      size={16}
                      color={theme.color.greenSheet}
                    ></AntDesign>
                  ) : (
                    <AntDesign
                      name="closecircle"
                      size={16}
                      color={theme.color.orangeMedium}
                    ></AntDesign>
                  )}
                </Text>
                <Text style={styles.text}>
                  Valor: <Text style={styles.price}>R$ {valor}</Text>
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.contentEditDelete}>
                <TouchableOpacity
                  style={styles.edit}
                  onPress={() => {
                    navigation.navigate("AlterPostUser", {
                      img: image,
                      val: valor,
                      trade: Boolean(troca),
                      plantid: plantid,
                      plantname: plantname,
                      postid:id,
                    });
                    setImage(image);
                    setPrice(JSON.stringify(valor));
                    setReg(false);
                  }}
                  activeOpacity={0.7}
                >
                  <Feather
                    name="edit"
                    size={22}
                    color={theme.color.whiteHeading}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.remove}
                  onPress={() => {
                    setModalVisible(true);
                    setDel(id);
                  }}
                  activeOpacity={0.7}
                >
                  <Feather
                    name="trash"
                    size={22}
                    color={theme.color.whiteHeading}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        data={dados}
        renderItem={renderItem1}
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
                  title="Sim"
                  onPress={() => {
                    deletePost(del),
                      setDelete("update"),
                      setModalVisible(!modalVisible);
                  }}
                  style={{ width: "45%", marginRight: 10 }}
                />
                <Button
                  title="Não"
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{ width: "45%" }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
