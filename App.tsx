import { Login, SignUp} from './src/routers/controller';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
// import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

  return (

      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name = "Login" component={Login} options={{headerShown:false}}/>
              <Stack.Screen name = "Cadastrar" component={SignUp}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})