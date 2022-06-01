import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

import { theme } from "../../global/theme";
import { styles } from "./styles";
import BicoPapagaio from "../../../assets/plants/bicoPapagaio.jpg";
import EspadaSaoJorge from "../../../assets/plants/espadaSaoJorge.jpg";
import Samambaia from "../../../assets/plants/samambaia.jpg";
import Zamioculca from "../../../assets/plants/zamioculca.jpg";
import { useNavigation } from "@react-navigation/native";

export function PlantCardPrimary({ posts }) {
  const plants = posts;

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <Item
      title={item.title}
      price={item.valor}
      image={item.image}
      status={item.troca}
      category={item.category}
    />
  );

  const Item = ({ title, price, image, status, category }: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("PlantDetails")}
    >
      <View
        style={styles.background}
        // colors={[purple, purpleDark]}
      >
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{category}</Text>

            <View style={styles.contentText}>
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
      style={{ paddingRight: 20 }}
      showsHorizontalScrollIndicator={false}
      // contentContainerStyle={{ paddingRight: 30 }}
      onEndReachedThreshold={0.1}
      data={plants}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      horizontal
    />
  );
}
