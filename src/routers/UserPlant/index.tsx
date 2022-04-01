import { Keyboard, Text, TouchableWithoutFeedback, View, FlatList } from "react-native";
import { Background } from "../../components/Background";

import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./styles";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: '/assets/Login/clara.jpg',
    title: 'Samambaia',
  },
  // {
  //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //   title: 'Second Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: 'Third Item',
  // },
];

const Item = ({ title, image }: any) => (
  <View>
    <Text style={styles.flatlist}>{title}</Text>
  </View>
);

export default function UserPlant() {
  const renderItem = ({ item }: any) => (
    <Item title={item.title} image={item.image}/>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={styles.container}>
          <View style={styles.header}>
            <Profile />
          </View>
          
          <SearchBar /> 

          <View style={styles.content}>
            <Text style={styles.title}>
              Plantas mais populares
            </Text>

            <View>
              <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.enviromentList}
              />
            </View>
          </View>
        </View>  
      </Background>
    </TouchableWithoutFeedback>
  )
}