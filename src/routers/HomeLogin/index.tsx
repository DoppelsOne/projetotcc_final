import { Keyboard, Text, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./styles";

export default function HomeLogin() {  
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
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>
              Populares
            </Text> 
            <PlantCardPrimary />

            <Text style={styles.title}>
              Mais vendidas
            </Text>                      
            <PlantCardPrimary />

            <Text style={styles.title}>
              Raras
            </Text>                      
            <PlantCardPrimary /> 
          </View>
        </ScrollView>
      </Background>
    </TouchableWithoutFeedback>
  )
}