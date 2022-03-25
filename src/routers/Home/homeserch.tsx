import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {TextInput,Container,} from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home() {
  // const Tab = createBottomTabNavigator();
  
    // function HomeScreen() {
        return (
        <Container>
           <Text></Text>
           <Icon name="menufold" size={60} color="#900" />
           <TextInput placeholder= 'Qual a planta em mente'
              style={{borderWidth:2, borderColor:'#AA0'}}
             />   
        </Container>
      );
      
      // function SettingsScreen() {
      //   return (
      //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      //       <Text>asdasd</Text>
      //     <Text>asdasd</Text>
      //     </View>
      //   );
      // }
    
//         return (
// <NavigationContainer>
// <Tab.Navigator>
//    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//   <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
  
// </Tab.Navigator>
// </NavigationContainer>
//         );
    }