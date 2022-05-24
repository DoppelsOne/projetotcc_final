import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/theme";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  color?: string;
};

export function Button({ title, color, ...rest }: ButtonProps) {
  const { orange, orangeDark, greenLight, green } = theme.color;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <LinearGradient
        style={styles.container}
        colors={color ? [greenLight, green] : [orange, orangeDark]}
      >
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
