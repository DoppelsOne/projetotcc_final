import { Keyboard, Text, TouchableWithoutFeedback, View, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { PlantCardSecundary } from "../../components/PlantCardSecundary";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./styles";

export default function UserPlant() {  
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
            <Text style={styles.title}>
              Minhas Plantas
            </Text> 

            <PlantCardSecundary /> 
          </ScrollView>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}