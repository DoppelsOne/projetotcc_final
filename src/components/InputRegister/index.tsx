import React, { useState, useEffect } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/theme";
import MaskInput, { Masks } from "react-native-mask-input";
interface InputProps extends TextInputProps {
  iconName?: React.ComponentProps<typeof Feather>["name"];
  value?: string;
  place?: any;
}

export function InputRegister({
  place,
  iconName,
  value,
  setT,
  mask,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  return (
    <>
      <View
        style={[
          styles.form,
          (isFocused || isFilled) && { borderColor: theme.color.greenLight },
        ]}
      >
        <Feather
          name={iconName}
          style={[
            styles.icon,
            (isFocused || isFilled) && { color: theme.color.green },
          ]}
        />
        <MaskInput
          mask={mask}
          value={value}
          placeholder={place}
          placeholderTextColor={theme.color.whiteHeading}
          style={styles.input}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onChangeText={(props) => {
            setT(props);
          }}
          {...rest}
        />
      </View>
    </>
  );
}
