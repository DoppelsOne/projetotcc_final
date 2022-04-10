import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../global/theme';

import {
  Container,
  Title,
  Price,
  TitleButton,
  Content,
  Button,
  TypeMoney
} from './styles'

export function CheckoutAndPrice() {
  return (
    <Container>
      <Content>
        <Title>Valor</Title>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TypeMoney>R$</TypeMoney>
          <Price>29,90</Price>
        </View>
      </Content>
      <TouchableOpacity activeOpacity={0.7}>
        <Button>
          <FontAwesome 
            name='whatsapp'
            color={theme.color.whiteHeading}
            size={20}
          />
          <TitleButton>Contato</TitleButton>
        </Button>
      </TouchableOpacity>
    </Container>
  )
}