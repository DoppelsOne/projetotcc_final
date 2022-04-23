import React, { useState } from 'react'
import { TextInputProps, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Feather } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'

import { theme } from '../../global/theme'
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
} from './styles'
import { InputRegister } from '../../components/InputRegister'
import { Button } from '../../components/Button'
import { InputDescription } from '../../components/InputDescription'

interface RegisterProps extends TextInputProps {
  value?: string;
}

export default function RegisterPlant({ value }: RegisterProps) {
  const [checked, setChecked] = useState('first')
  const [checkedCategory, setCheckedCategory] = useState('first')

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (     
      <Container>
        <StatusBar backgroundColor='transparent' style='dark' translucent />
        <ContainerTitle>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleGoBack}      
            >
            <MaterialIcons   
              name='arrow-back-ios'
              style={{
                paddingTop: 50,
              }}
              color={theme.color.whiteHeading}
              size={25}
            />
          </TouchableOpacity>

          <Title>Cadastre sua planta</Title>
          <Subtitle>Preenchendo os campos com o máximo {'\n'}de detalhes possíveis</Subtitle>

        </ContainerTitle>
        <Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Wrapper>
              <InputRegister
                iconName='edit'
                placeholder='Qual o nome da planta?'
                value={name}
                onChangeText={setName}
              />  
              <InputRegister
                iconName='edit'
                placeholder='Qual o valor da planta?'
                value={price}
                onChangeText={setPrice}
              />
              <InputDescription
                iconName='edit'
                placeholder='Descrição da planta'
                value={description}
                onChangeText={setDescription}
                multiline
                maxLength={300}
                textAlignVertical='top'
              />

              <CheckBoxContainer>
                <TextSwap>Disponível para troca {'\n'}por outra planta?</TextSwap>

                <CheckBoxWrapper>
                  <Checkbox
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                    uncheckedColor={theme.color.overlay}
                    color={theme.color.green}
                    size={30}
                  />
                  <CheckBoxText>Sim</CheckBoxText>
                </CheckBoxWrapper>

                <CheckBoxWrapper>
                  <Checkbox
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                    uncheckedColor={theme.color.overlay}
                    color={theme.color.green}
                    size={30}
                  />
                  <CheckBoxText>Não</CheckBoxText>
                  </CheckBoxWrapper>
                </CheckBoxContainer>

                <CheckBoxCategotyContainer>
                  <TextSwap>Categoria</TextSwap>

                  <CheckBoxCategotyContent>
                    <CheckBoxWrapper>
                      <Checkbox
                        value="first"
                        status={ checkedCategory === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedCategory('first')}
                        uncheckedColor={theme.color.overlay}
                        color={theme.color.green}
                        size={30}
                      />
                      <CheckBoxText>Interno</CheckBoxText>
                    </CheckBoxWrapper>

                    <CheckBoxWrapper>
                      <Checkbox
                        value="second"
                        status={ checkedCategory === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedCategory('second')}
                        uncheckedColor={theme.color.overlay}
                        color={theme.color.green}
                        size={30}
                      />
                      <CheckBoxText>Externo</CheckBoxText>
                    </CheckBoxWrapper>

                    <CheckBoxWrapper>
                      <Checkbox
                        value="third"
                        status={ checkedCategory === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedCategory('third')}
                        uncheckedColor={theme.color.overlay}
                        color={theme.color.green}
                        size={30}
                      />
                      <CheckBoxText>Ambos</CheckBoxText>
                    </CheckBoxWrapper>
                  </CheckBoxCategotyContent>
                </CheckBoxCategotyContainer>
                
                <Button 
                  title='Cadastrar planta'
                />
            </Wrapper>
          </ScrollView>
        </Content>          
      </Container>
  )
}