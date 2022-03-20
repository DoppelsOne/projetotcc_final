import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function Login() {


    function HomeScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
          </View>
        );
      }
      
      function SettingsScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>asdasd</Text>
          <Text>asdasd</Text>
          </View>
        );
      }
    
        return (
<NavigationContainer>
<Tab.Navigator>
  {/* <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
  <Tab.Screen name="login" component={login} options={{ headerShown: false }}/> */}
</Tab.Navigator>
</NavigationContainer>
        );
      }



const styles = StyleSheet.create({

sas:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}

})
