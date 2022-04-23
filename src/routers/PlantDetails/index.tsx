import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { 
  Container, 
  Content,
  Text, 
  About, 
  Subtitle, 
  Information, 
  Title, 
  TextLocalization
} from './styles'
import { CheckoutAndPrice } from '../../components/CheckoutAndPrice'
import { theme } from '../../global/theme'
import { useNavigation } from '@react-navigation/native'

export default function PlantDetails() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <View>
        <StatusBar backgroundColor="transparent" style="light" translucent />
        <Image 
          source={require('../../../assets/plants/samambaia.jpg')}
          style={{width: '100%', height: 350}}
        />
        <TouchableOpacity 
          activeOpacity={0.7}
          style={{position: 'absolute'}}
          onPress={handleGoBack}       
        >
          <MaterialIcons   
            name='arrow-back-ios'
            style={{
              marginHorizontal: 20,
              marginTop: 30,
              backgroundColor: theme.color.whiteHeading,
              borderRadius: 8,
              paddingLeft: 10,
              paddingVertical: 5,
              justifyContent: 'center',
            }}
            color={theme.color.purpleDark}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <Content>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Information>
            <Title>Samambaia</Title>
            <Subtitle>Interior</Subtitle>
          </Information>
          <View>
            <About>Descrição</About>
            <Text>As samambaias são vegetais vasculares membros do táxon das pteridófitas (que deixou de ter validade taxonômica e só é utilizado como uma denominação informal). Elas possuem tecidos vasculares (xilema e floema), folhas verdadeiras, se reproduzem através de esporos e não produzem sementes ou flores.</Text>
          </View>
          <View>
            <About>Localização</About>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View>
                <Subtitle>Cidade</Subtitle>
                <TextLocalization>Rio de Janeiro</TextLocalization>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                <Subtitle>Estado</Subtitle>
                <TextLocalization>RJ</TextLocalization>
              </View>
            </View>
          </View>
        </ScrollView>
      </Content>

      <CheckoutAndPrice />
    </Container>
  )
}