import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/theme'
import { styles } from './styles'
import BicoPapagaio from '../../../assets/plants/bicoPapagaio.jpg'
import EspadaSaoJorge from '../../../assets/plants/espadaSaoJorge.jpg'
import Samambaia from '../../../assets/plants/samambaia.jpg'
import Zamioculca from '../../../assets/plants/zamioculca.jpg'

const plants = [
  { id: 1, title: 'Samambaia', status: 'Aceito troca', price: '29.90', image: BicoPapagaio},
  { id: 2, title: 'Bico de Papagaio', status: 'Não troca', price: '50.00', image: EspadaSaoJorge},
  { id: 3, title: 'Espada de São jorge', status: 'Não troca', price: '45.90', image: Samambaia},
  { id: 4, title: 'Zamioculca', status: 'Aceito troca', price: '66.00', image: Zamioculca},
]

const { green, greenDark } = theme.color;

const Item = ({ title, price, image, status }: any) => (
  <TouchableOpacity activeOpacity={0.7}>
    <LinearGradient
      style={styles.background}
      colors={[green, greenDark]}
    >
      <View style={styles.container}>
          <Image source={image} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        <View style={styles.contentText} >
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.price}>R$ {price}</Text>
        </View>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);


export function PlantToSell() {
  const renderItem = ({ item }: any) => (
    <Item 
      title={item.title}
      price={item.price}
      image={item.image}
      status={item.status}   
    />
  );

  return (
    <FlatList
      style={{ paddingRight: 20}}
      horizontal
      showsHorizontalScrollIndicator={false}
      // contentContainerStyle={{ paddingRight: 30 }}
      onEndReachedThreshold={0.1}
      data={plants}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
    />
  )
}