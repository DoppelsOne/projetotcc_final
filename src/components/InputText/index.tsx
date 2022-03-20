import React, { useState } from "react";
import { Feather } from "@expo/vector-icons"
import { Container, TextInput } from "./styles";

interface InputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value: string;
}

export function InputText({ iconName, value, ...rest }: InputProps) { 
  return(
    <>
      <Container> 
        <Feather 
          name={iconName}
        />                   
        <TextInput
          {...rest}           
        />
      </Container>
    </>
  )

}