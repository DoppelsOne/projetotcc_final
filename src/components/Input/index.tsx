import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/theme";
import MaskInput, { Masks } from "react-native-mask-input";

interface TextInput extends MaskInput {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function Input({ iconName, value, ...rest }: MaskInput) {
  // const [isFocused, setIsFocused] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  // function handleInputBlur() {
  //   setIsFocused(false)
  //   setIsFilled(!!value)
  // }

  // function handleInputFocus() {
  //   setIsFocused(true)
  // }

  return (
    <>
      <View style={styles.form}>
        <Feather name={iconName} style={styles.icon} />
        <TextInput
          placeholderTextColor={theme.color.white}
          style={styles.input}
          {...rest}
        />
      </View>
    </>
  );
}
