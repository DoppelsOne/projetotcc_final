import { Keyboard, Text, TouchableWithoutFeedback, View, ScrollView, TouchableOpacityBase, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Background } from "../../components/Background";
import { PlantCardFilter } from "../../components/PlantCardFilter";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { PlantCardSecundary } from "../../components/PlantCardSecundary";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./styles";

export default function Home() {  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>      
      <Background>
        <View style={styles.container}>
          <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
            <View style={styles.header}>
              <Profile />
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <SearchBar />
              <TouchableOpacity activeOpacity={0.7}>
                <AntDesign
                  name='menu-fold'
                  style={styles.filterIcon}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>  
        <View style={styles.content}>
          <PlantCardFilter horizontal/>

          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.title}>
                Populares
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.seeMore}>
                  Ver mais
                </Text>
              </TouchableOpacity>
            </View>

            <PlantCardPrimary />

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.title}>
                Perto de você
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.seeMore}>
                  Ver mais
                </Text>                
              </TouchableOpacity>
            </View>                     
            <PlantCardSecundary horizontal/>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={styles.title}>
                Raras
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.seeMore}>
                  Ver mais
                </Text>
              </TouchableOpacity>
            </View>                      
            <PlantCardSecundary horizontal/>

          </ScrollView>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}