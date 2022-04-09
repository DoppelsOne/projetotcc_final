import { Keyboard, Text, TouchableWithoutFeedback, View, ScrollView, TouchableOpacityBase, TouchableOpacity } from "react-native";
import { Background } from "../../components/Background";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
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
            
            <SearchBar />
          </View>
        </View>  
        <View style={styles.content}>
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
            <PlantCardPrimary />

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
            <PlantCardPrimary /> 
          </ScrollView>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}