import React, { useState } from "react";
import { Animated, StyleSheet, Keyboard,KeyboardType, Button, TouchableOpacity, Alert, TextInput, View} from "react-native";
import {
  Container,
  Input,
  InputText,
  Link,
  Form,
  TextBtn,
  Image,
} from "./styles-login";
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/Login/clara.jpg";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {SignUp} from '../controller'
import {theme} from '../../global/theme';

export default function Login({navigation}) {
  
  // const [cont, setcont] = useState(new Animated.Value(0));

  // Animated.timing(cont,{toValue:1,duration:1000}).start;

  // const Stack = createNativeStackNavigator();   

  return (

    <Container>
      <StatusBar backgroundColor="transparent" style="light" translucent />
      <Image source={logo} />
      <InputText placeholder='Usuário' />
      <InputText placeholder="Senha" secureTextEntry={true}/>
      <Form>
        <Input onPress={() => navigation.navigate('Home')} accessible={false} >
          <TextBtn>Login</TextBtn>
        </Input>
        <Input accessible={false} onPress={() => navigation.navigate('Cadastrar')}>
          <TextBtn>Cadastrar</TextBtn>
        </Input>
      </Form>
      <View style={styles.form_icon}>
      <Icon style={styles.icones} name='social-facebook' />
      <Icon style={styles.icones} name='social-instagram'  />
      <Icon style={styles.icones} name='social-twitter' />
      </View>
      <Link>Esqueceu sua senha?</Link>
    </Container>
  );
}
 const styles = StyleSheet.create({
    icones: {
        backgroundColor:'white',
        borderRadius:10,
        padding:5,
        margin:10,
        fontSize:40,
        color: theme.color.greenDark,
    },
    form_icon: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:20,
    }

 })
