import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface PlantCardFilterProps {
  active?: boolean;
  categorias: any;
  select: any;
}

// const categoria = [
//   { id: 1, category: "Todos" },
//   { id: 2, category: "Interior" },
//   { id: 3, category: "Exterior" },
//   { id: 4, category: "Raras" },
//   { id: 5, category: "Pequenas" },
//   { id: 6, category: "Grandes" },
//   { id: 7, category: "Grandes" },
//   { "id": 8, "category": "Grandes" },
// ];

export function PlantCardFilter({
  active = false,
  categorias,
  select,
  ...rest
}: PlantCardFilterProps) {
  // const [isFocused, setIsFocused] = useState([])
  // console.log(categorias.categoria);

  const renderItem = ({ item }: any) => <Item category={item.categoria} />;

  const Item = ({ category }: any) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {select(category)}}>
      <View style={[styles.container, active && styles.FocusedContainer]}>
        <Text style={[styles.text, active && styles.FocusedText]}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{ paddingRight: 0 }}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      data={categorias}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      {...rest}
    />
  );
}
