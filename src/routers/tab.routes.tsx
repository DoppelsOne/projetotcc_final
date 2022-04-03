import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'

import { HomeLogin, UserPlant } from '../../src/routers/controller';
import { theme } from '../global/theme';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
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
        component={HomeLogin} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Entypo
              name="home"
              size={size}
              color={focused ? theme.color.purpleDark : theme.color.gray}
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
            <Entypo
              name="heart"
              size={size}
              color={focused ? theme.color.purpleDark : theme.color.gray}
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
            <Octicons
            name="bell"
            size={size}
            color={focused ? theme.color.purpleDark : theme.color.gray}
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
            <Octicons
            name="gear"
            size={size}
            color={focused ? theme.color.purpleDark : theme.color.gray}
            />
          ))           
        }}
      />
    </Tab.Navigator>
  )
}
