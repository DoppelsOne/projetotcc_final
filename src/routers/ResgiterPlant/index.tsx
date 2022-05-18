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
} from "./styles";
import { InputRegister } from "../../components/InputRegister";
import { Button } from "../../components/Button";
import { InputDescription } from "../../components/InputDescription";
import { Modalize } from "react-native-modalize";

export default function RegisterPlant() {

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };


  const [checked, setChecked] = useState("first");
  const [checkedCategory, setCheckedCategory] = useState("first");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


    const navigation = useNavigation();

    function handleGoBack() {
      navigation.goBack();
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
      <>
        <Container>
          <StatusBar backgroundColor="transparent" style="dark" translucent />

          <Title>Cadastre sua planta!</Title>
          <Subtitle>
            Preenchendo os campos com o máximo {"\n"}de detalhes possíveis
          </Subtitle>

          <Content>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Wrapper>
                <InputRegister
                  placeholder="Qual o nome da sua planta?"
                  value={name}
                  onChangeText={setName}
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
                <Button title="Cadastrar!" onPress={onOpen}></Button>
              </Wrapper>
            </ScrollView>
          </Content>
        </Container>

        <Modalize ref={modalizeRef} snapPoint={100} withHandle={true}><View><Text>Seu cu</Text></View></Modalize>
      </>
    );
  };

