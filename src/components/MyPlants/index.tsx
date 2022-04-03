import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Switch } from 'react-native'

import { theme } from '../../global/theme'
import { styles } from './styles'
import BicoPapagaio from '../../../assets/plants/bicoPapagaio.jpg'
import EspadaSaoJorge from '../../../assets/plants/espadaSaoJorge.jpg'
import Samambaia from '../../../assets/plants/samambaia.jpg'
import Zamioculca from '../../../assets/plants/zamioculca.jpg'

const plants = [
  { id: 1, title: 'Samambaia', status: `troca`, price: '29.90', image: Samambaia},
  { id: 2, title: 'Bico de Papagaio', status: 'troca', price: '50.00', image: BicoPapagaio},
  { id: 3, title: 'Espada de São jorge', status: 'troca', price: '45.90', image: EspadaSaoJorge},
  { id: 4, title: 'Zamioculca', status: 'troca', price: '66.00', image: Zamioculca},
]

export function MyPlants() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const renderItem = ({ item }: any) => (
    <Item 
      title={item.title}
      price={item.price}
      image={item.image}
      status={item.status}   
    />
  );

  const Item = ({ title, price, image, status }: any) => (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.background}>
        <View style={styles.container}>
          <Image source={image} style={styles.image}/>
  
          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.contentText} >
              <View>
                <Text style={styles.text}>valor</Text>
                <Text style={styles.price}>R$ {price}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.status}>{status}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: theme.color.orange }}
                  thumbColor={isEnabled ? theme.color.orangeWeak : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{ paddingRight: 20}}
      showsHorizontalScrollIndicator={false}
      // contentContainerStyle={{ paddingRight: 30 }}
      onEndReachedThreshold={0.1}
      data={plants}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
    />
  )
}

