import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface PlantCardFilterProps {
  active?: boolean;
}

const plants = [
  { id: 1, category: 'Todos'},
  { id: 2, category: 'Interior'},
  { id: 3, category: 'Exterior'},
  { id: 4, category: 'Raras'},
  { id: 5, category: 'Pequenas'},
  { id: 6, category: 'Grandes'},
]

export function PlantCardFilter({active = false, ...rest}: PlantCardFilterProps) { 
  // const [isFocused, setIsFocused] = useState([])

  const renderItem = ({ item }: any) => (
    <Item category={item.category} />
  );

  const Item = ({ category }: any) => (
    <TouchableOpacity activeOpacity={0.7}>    
      <View 
        style={[
          styles.container,
          active && styles.FocusedContainer
        ]}
      >  
        <Text 
          style={[
            styles.text,
            active && styles.FocusedText
          ]}
        >
          {category}
        </Text>             
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{ paddingRight: 20}}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      data={plants}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      {...rest}
    />
  )
}

