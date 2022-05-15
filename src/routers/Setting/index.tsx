import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

import { Background } from '../../components/Background'
import { styles } from './styles'
import { Image } from './styles'
import logo from "../../../assets/Login/clara.jpg";


export default function Setting() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>      
        <Background>        
          <View style={styles.container}>           
            <View style={styles.header}>
              <Image 
                source={logo}
              />
            </View>
          </View> 
          
          <View style={styles.content}>
            <Text style={styles.title}>
              Dados Cadastrais
            </Text>
          </View>
          
        </Background>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
