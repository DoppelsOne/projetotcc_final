import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { TabRoutes }  from './src/routers/tab.routes'
import { useFonts } from 'expo-font';

import { Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins'

import { Login, SignUp } from './src/routers/controller';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

const App = () => {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>      
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name = "Cadastrar" component={SignUp} options={{headerTransparent: true}}/>
        <Stack.Screen name = "HomeLogin" component={TabRoutes} options={{headerShown: false}}/>
        {/* <Stack.Screen name = "UserPlant" component={UserPlant} options={{headerShown: false}}/> */}
      </Stack.Navigator>    
    </NavigationContainer>
  );
};

export default App;
