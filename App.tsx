<<<<<<< HEAD
import { Login, SignUp, UserPlant} from './src/routers/controller';
=======
<<<<<<< HEAD
import { Login, SignUp } from "./src/routers/controller";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
=======
import { Login, SignUp} from './src/routers/controller';
>>>>>>> 04b72d343fc0b02b41df5173620c3075f09ca567
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
>>>>>>> fd1caec660d3bef251ee686d5d3068cb977c326e

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastrar" component={SignUp} options={{ headerShown: false }}/>
=======
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name = "Cadastrar" component={SignUp} options={{headerTransparent: true}}/>
<<<<<<< HEAD
          <Stack.Screen name = "UserPlant" component={UserPlant} options={{headerTransparent: true}}/>
=======
>>>>>>> fd1caec660d3bef251ee686d5d3068cb977c326e
>>>>>>> 04b72d343fc0b02b41df5173620c3075f09ca567
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
