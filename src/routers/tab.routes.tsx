import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Home, UserPlant } from '../../src/routers/controller';
import { theme } from '../global/theme';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  const [focused, isFocused] = useState('')

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          // bottom: 10,
          // left: 10,
          // right: 10,
          backgroundColor: theme.color.whiteHeading,
          // borderRadius: 15,
          shadowColor: '#008040',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5
        }
        // activeBackgroundColor: theme.color.green,
        // activeTintColor: theme.color.white,
        // inactiveTintColor: theme.color.purpleDark,
        // style: {
        //     paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        //     height: 88,
        // },
      }}
    >
      <Tab.Screen         
        name="HomeLogin" 
        component={Home} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            focused ? 
            <Ionicons
              name="md-home"
              size={22}
              color={theme.color.purpleDark}
            /> :
            <Ionicons
              name="ios-home-outline"
              size={22}
              color={theme.color.purpleDark}
            />
          )          
        }}
      />
      <Tab.Screen 
        name="UserPlant" 
        component={UserPlant} 
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, focused }) => (
            focused ? 
            <AntDesign
              name="heart"
              size={22}
              color={theme.color.purpleDark}
            /> :
            <AntDesign
              name="hearto"
              size={22}
              color={theme.color.purpleDark}
            />
          ))           
        }}
      />  

      <Tab.Screen 
        name="Notifications" 
        component={UserPlant} 
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, focused }) => (
            focused ? 
            <MaterialCommunityIcons
              name="bell"
              size={25}
              color={theme.color.purpleDark}
            /> :
            <MaterialCommunityIcons
              name="bell-outline"
              size={26}
              color={theme.color.purpleDark}
            /> 
          ))           
        }}
      /> 

      <Tab.Screen 
        name="Settings" 
        component={UserPlant} 
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, focused }) => (
            focused ? 
            <FontAwesome
              name="user"
              size={24}
              color={theme.color.purpleDark}
            /> :
            <FontAwesome
              name="user-o"
              size={21}
              color={theme.color.purpleDark}
            /> 
          ))           
        }}
      />
    </Tab.Navigator>
  )
}
