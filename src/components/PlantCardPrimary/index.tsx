import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Switch } from 'react-native'

import { theme } from '../../global/theme'
import { styles } from './styles'
import BicoPapagaio from '../../../assets/plants/bicoPapagaio.jpg'
import EspadaSaoJorge from '../../../assets/plants/espadaSaoJorge.jpg'
import Samambaia from '../../../assets/plants/samambaia.jpg'
import Zamioculca from '../../../assets/plants/zamioculca.jpg'
import { useNavigation } from '@react-navigation/native'

const plants = [
  { id: 1, title: 'Samambaia', category: 'Interior', status: `Troca`, price: '29.90', image: Samambaia},
  { id: 2, title: 'Zamioculca', category: 'Interior', status: 'Troca', price: '66.00', image: Zamioculca},
  { id: 3, title: 'Espada de São jorge', category: 'Interior', status: 'Troca', price: '45.90', image: EspadaSaoJorge},
  { id: 4, title: 'Bico de Papagaio', category: 'Exterior', status: 'Troca', price: '50.00', image: BicoPapagaio},
]

export function PlantCardPrimary() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const navigation = useNavigation();
  
  const renderItem = ({ item }: any) => (
    <Item 
      title={item.title}
      price={item.price}
      image={item.image}
      status={item.status} 
      category={item.category}  
    />
  );

  const Item = ({ title, price, image, status, category }: any) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('PlantDetails')}>
      <View
        style={styles.background}
        // colors={[purple, purpleDark]}
      >
        <View style={styles.container}>
          <Image source={image} style={styles.image}/>
  
          <View style={styles.information}>
            <Text style={styles.text}>{category}</Text>
            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.contentText} >
              <View>
                <Text style={styles.text}>Valor</Text>
                <Text style={styles.price}>R$ {price}</Text>
              </View>
              {/* <View style={{alignItems: 'center'}}>
                <Text style={styles.status}>{status}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: theme.color.green }}
                  thumbColor={isEnabled ? theme.color.greenWeak : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View> */}
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
      horizontal
    />
  )
}

