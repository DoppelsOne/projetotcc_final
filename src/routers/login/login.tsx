import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../../../assets/Login/clara.jpg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  Container,
  Content,
  Image,
  Wrapper,
  Title,
  ContainerFooter,
  TextFooter,
  ButtonFooter,
  Or,
  Subtitle,
  TextForgot,
} from "./styles";
import { theme } from "../../global/theme";
import { CreateUse } from "../../DB/cadastroCase/createUse";
import { CreateUseController } from "../../DB/cadastroCase/createController.";
import axios from "axios";

export default function Login() {
  const { green, greenDark } = theme.color;
  const navigation = useNavigation();
  const url = "http://10.0.2.2:3000/";
  // const [cont, setcont] = useState(new Animated.Value(0));
  // Animated.timing(cont,{toValue:1,duration:1000}).start;
  // const Stack = createNativeStackNavigator();

  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function getDados() {
      try {
        const lista = await axios.get(url);
        console.log(lista.data);
        setDados(lista.data);
      } catch (err) {
        console.log(err);
      }
    }
    getDados()

  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor="transparent" style="light" translucent />
        <Content>
          <Wrapper>
            <Image source={logo} />
          </Wrapper>

          <Title>Login</Title>
          <Subtitle>Para entrar na sua conta!</Subtitle>

          <View style={styles.form_icon}>
            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                style={styles.backgroundSocialIcon}
                colors={[green, greenDark]}
              >
                <Icon style={styles.icones} name="social-facebook" />
                <Text style={styles.textSocialIcon}>Entrar com Facebook</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                style={styles.backgroundSocialIcon}
                colors={[orange, orangeDark]}
              >
                <Icon style={styles.icones} name='social-instagram'  />
                <Text>Entrar com Instagram</Text>
              </LinearGradient>
            </TouchableOpacity> */}

            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                style={styles.backgroundSocialIcon}
                colors={[green, greenDark]}
              >
                <Icon style={styles.icones} name="social-google" />
                <Text style={styles.textSocialIcon}>Entrar com Google</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <Or>Ou</Or>
          <Input
            iconName="user"
            placeholder="Usuário ou email"
            placeholderTextColor={theme.color.white}
          />
          <Input
            iconName="lock"
            placeholder="Senha"
            placeholderTextColor={theme.color.white}
            secureTextEntry
          />

          <ButtonFooter onPress={() => navigation.navigate("Login")}>
            <TextForgot>Esqueci minha senha </TextForgot>
          </ButtonFooter>

          <Button
            title="Entrar"
            onPress={() => navigation.navigate("Home")}
            style={{ marginTop: 10 }}
          />

          <ContainerFooter>
            <ButtonFooter onPress={() => navigation.navigate("Cadastrar")}>
              <TextFooter>CADASTRE-SE</TextFooter>
            </ButtonFooter>
          </ContainerFooter>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
    // <Container>
    //   <StatusBar backgroundColor="transparent" style="light" translucent />

    //   <Image source={logo} />

    //   <Form>
    //     {/* <InputText placeholder='Usuário' />
    //     <InputText placeholder="Senha" secureTextEntry={true}/> */}
    //     {/* <Input onPress={() => navigation.navigate('Home')} accessible={false} >
    //       <TextBtn>Login</TextBtn>
    //     </Input> */}
    //     {/* <Input accessible={false} onPress={() => navigation.navigate('Cadastrar')}>
    //       <TextBtn>Cadastrar</TextBtn>
    //     </Input> */}
    //     <Input
    //       iconName="user"
    //       placeholder="Usuário ou email"
    //     />
    //     <Input
    //       iconName="lock"
    //       placeholder="Senha"
    //     />

    //     <View
    //       style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
    //     >
    //       <Button title='Login' onPress={() => navigation.navigate('Home')}/>
    //       <Button title='Cadastrar' onPress={() => navigation.navigate('Cadastrar')}/>
    //     </View>

    //     <View style={styles.form_icon}>
    //       <Icon style={styles.icones} name='social-facebook' />
    //       <Icon style={styles.icones} name='social-instagram'  />
    //       <Icon style={styles.icones} name='social-google' />
    //     </View>

    //     <Link>Esqueceu sua senha?</Link>
    //   </Form>
    // </Container>
  );
}

const styles = StyleSheet.create({
  form_icon: {
    flexDirection: "column",
    marginVertical: 10,
  },

  backgroundSocialIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    padding: 10,
    borderRadius: 16,
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  icones: {
    fontSize: 26,
    color: theme.color.whiteHeading,
    marginRight: 10,
  },

  textSocialIcon: {
    fontSize: 16,
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.whiteHeading,
    marginTop: 2,
  },
});
