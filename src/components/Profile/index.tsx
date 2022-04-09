import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../global/theme';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>          
          <Text style={styles.userName}>
            Douglas
          </Text>
        </View>
        <Text style={styles.subtitle}>Está procurando por plantas?</Text>
      </View>

      <Avatar urlImage="https://github.com/douglassantiagos.png"  />
      {/* <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.7} style={{marginRight: 5}}>
          <Feather 
            name='plus'
            size={28}
            color={theme.color.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}