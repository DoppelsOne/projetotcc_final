import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Home, UserPlant } from '../../src/routers/controller';
import { theme } from '../global/theme';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          paddingHorizontal: 8,
          backgroundColor: theme.color.whiteHeading,
          // bottom: 10,
          // left: 10,
          // right: 10,
          // borderTopRightRadius: 16,
          // borderTopLeftRadius: 16,
          // shadowColor: '#008040',
          // shadowOffset: {
          //   width: 0,
          //   height: 10,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.5,
          // elevation: 5
        }
        // activeBackgroundColor: theme.color.orangeMedium,
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
            <View
              style={{
                backgroundColor: theme.color.orangeWeak,
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 16,
                alignItems: 'center'
              }}
            >
              <Ionicons
                name="md-home"
                size={22}
                color={theme.color.orangeMedium}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: theme.fonts.poppins_400,
                  color: theme.color.orangeMedium,
                }}
              >
                Home
              </Text>
            </View> :
            <Ionicons
              name="ios-home-outline"
              size={22}
              color={theme.color.gray}
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
            <View
              style={{
                backgroundColor: theme.color.orangeWeak,
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 16,
                alignItems: 'center',
              }}
            >
              <AntDesign
                name="heart"
                size={22}
                color={theme.color.orangeMedium}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: theme.fonts.poppins_400,
                  color: theme.color.orangeMedium,
                }}
              >
                Suas plantas
              </Text>
            </View> :
            <AntDesign
              name="hearto"
              size={22}
              color={theme.color.gray}
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
            <View
              style={{
                backgroundColor: theme.color.orangeWeak,
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 16,
                alignItems: 'center',
              }}
            >
              <MaterialCommunityIcons
                name="bell"
                size={25}
                color={theme.color.orangeMedium}                
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: theme.fonts.poppins_400,
                  color: theme.color.orangeMedium,
                  maxWidth: 200,
                }}
              >
                Notificações
              </Text>
            </View> :
            <MaterialCommunityIcons
              name="bell-outline"
              size={26}
              color={theme.color.gray}
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
            <View
              style={{
                backgroundColor: theme.color.orangeWeak,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 16,
                alignItems: 'center'
              }}
            >
              <FontAwesome
                name="user"
                size={24}
                color={theme.color.orangeMedium}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: theme.fonts.poppins_400,
                  color: theme.color.orangeMedium,
                  maxWidth: 200,
                }}
              >
                Perfil
              </Text>
            </View> :
            <FontAwesome
              name="user-o"
              size={21}
              color={theme.color.gray}
            /> 
          ))           
        }}
      />
    </Tab.Navigator>
  )
}
