import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/theme";
import { styles } from "./styles";
// import { Input } from "../../components/Input/index";

import InputEdit from "./../Edit/InputEdit";
import { deletePost } from "../../Db/axiosController";

// const plants = [
//   { id: 1, title: 'Espada de São jorge', category: 'Interior', status: 'Troca', price: '45.90', image: EspadaSaoJorge},
//   { id: 2, title: 'Zamioculca', category: 'Interior', status: 'Troca', price: '66.00', image: Zamioculca},
//   { id: 3, title: 'Samambaia', category: 'Interior', status: `Troca`, price: '29.90', image: Samambaia},
//   { id: 4, title: 'Bico de Papagaio', category: 'Exterior', status: 'Troca', price: '50.00', image: BicoPapagaio},
// ]

export function PlantCardSecundary({ posts, setDelete, ...rest }, navigation) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dados = posts;

  // console.log(dados3.map(d=>d.id))

  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      title={item.title}
      valor={item.valor}
      image={item.image}
      troca={item.troca}
      category={item.Categorias}
    />
  );
  const Item = ({ id, title, valor, image, troca, category }: any) => (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.background}>
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{category}</Text>

            <View style={styles.contentText}>
              <View>
                <Text style={styles.text}>Valor</Text>
                <Text style={styles.price}>R$ {valor}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.content}>
              <TouchableOpacity style={styles.edit} onPress={() => {}}>
                <Feather name="edit" size={40} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.remove}
                onPress={() => {
                deletePost(id), setDelete("update");
                }}
              >
                <Feather name="x" size={40} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      // contentContainerStyle={{ paddingRight: 30 }}
      onEndReachedThreshold={0.1}
      data={dados}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      {...rest}
    />
  );
}
