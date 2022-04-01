import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from "../../global/theme";
import { styles } from "./styles";

type BackgroundProps = {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  const { green, greenLight } = theme.color;

  return (
    <LinearGradient
      style={styles.container}
      colors={[green, greenLight]}
    >
      {children}
    </LinearGradient>
  )
}