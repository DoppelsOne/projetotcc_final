import { StyleSheet, Text, View, Modal } from "react-native";
import React,{useState} from "react";

export default function modal(props:any) {

    

  return (
      <Modal animationType="slide" transparent={false} visible={props}>

        <View>
            <Text>Odeio esse trabalho</Text>
        </View>

      </Modal>

  );
}

const styles = StyleSheet.create({});
