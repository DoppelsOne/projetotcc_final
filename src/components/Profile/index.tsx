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
      <Avatar urlImage="https://github.com/douglassantiagos.png"  />

      <View style={styles.user}>
        <View>
          <Text style={styles.greeting}>
            Bem vindo(a),
          </Text>          
          <Text style={styles.userName}>
            Douglas
          </Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.7} style={{marginRight: 5}}>
          <Feather 
            name='plus'
            size={28}
            color={theme.color.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}