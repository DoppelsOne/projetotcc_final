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
// import BicoPapagaio from "../../../assets/plants/bicoPapagaio.jpg";
// import EspadaSaoJorge from "../../../assets/plants/espadaSaoJorge.jpg";
// import Samambaia from "../../../assets/plants/samambaia.jpg";
// import Zamioculca from "../../../assets/plants/zamioculca.jpg";
import { useNavigation } from "@react-navigation/native";
import { map } from "lodash";
import AntDesign from "react-native-vector-icons/AntDesign";

export function PlantCardPrimary({ posts }) {
  const plants = posts;

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      title={item.title}
      price={item.valor}
      image={item.image}
      troca={item.troca}
      categoria={item.Categorias}
    />
  );

  const Item = ({ id, title, price, image, troca, categoria }: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("PlantDetails", { id: id })}
    >
      <View
        style={styles.background}
        // colors={[purple, purpleDark]}
      >
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>
              {categoria.map((cat) => {
                return cat + " ";
              })}
            </Text>

            <View style={styles.contentText}>
              <View>
                <Text style={styles.text}>
                  Troca:{" "}
                  {troca ? (
                    <AntDesign
                      name="checkcircle"
                      size={16}
                      color={theme.color.greenSheet}
                    ></AntDesign>
                  ) : (
                    <AntDesign
                      name="closecircle"
                      size={16}
                      color={theme.color.orangeMedium}
                    ></AntDesign>
                  )}
                </Text>
                <Text style={styles.text}>
                  Valor: <Text style={styles.price}>R$ {price}</Text>
                </Text>
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
      style={{ flex: 1, flexWrap: "wrap", }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      // contentContainerStyle={{ paddingRight: 30 }}
      onEndReachedThreshold={0.1}
      data={plants}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
    />
  );
}
