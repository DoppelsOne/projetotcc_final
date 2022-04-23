import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";
import { theme } from "../../global/theme";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function InputDescription({ iconName, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  return(
    <>
      <View style={[
        styles.form,
        (isFocused || isFilled) &&
        { borderColor: theme.color.greenLight }
      ]}
      > 
        <Feather 
          name={iconName}
          style={[
            styles.icon,
            (isFocused || isFilled) &&
            { color: theme.color.green }
          ]}
        />                   
        <TextInput
          placeholderTextColor={theme.color.gray}
          style={styles.input}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          {...rest}             
        />
      </View>
    </>
  )
}