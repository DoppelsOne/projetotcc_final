import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles';
import { theme } from "../../global/theme";

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function ButtonSecondary({ title, ...rest }: ButtonProps) {
  const { green, greenLight } = theme.color;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <LinearGradient
        style={styles.container}
        colors={[green, greenLight]}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>     
    </TouchableOpacity>
  )
}