import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Background } from "../../components/Background";
import { PlantCardSecundary } from "../../components/PlantCardSecundary";
import { Profile } from "../../components/Profile";
import { getPlant } from "../../Db/axiosController";
import { theme } from "../../global/theme";
import { styles } from "./styles";

export default function UserPlant({ route, navigation }) {
  const { orange, orangeDark } = theme.color;
  let data;
  const user = route.params.user;
  const log = user.login.charAt(0).toUpperCase() + user.login.slice(1);
  if (user.avatar == null) {
    data = user.avatar = "";
  } else {
    data = user.avatar;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
          <View style={styles.header}>
            <Profile login={log} avat={data} />
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Suas Plantas</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <PlantCardSecundary />
          </ScrollView>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonRegisterContainer}
          onPress={()=> {getPlant().then((resp) => {
            navigation.navigate("RegisterPlant", { plant: resp });
          })}}
        >
          <LinearGradient
            style={styles.buttonRegister}
            colors={[orange, orangeDark]}
          >
            <Entypo
              name="plus"
              size={30}
              color={theme.color.whiteHeading}
              // style={{ marginRight: 5 }}
            />
            {/* <Text style={styles.buttonText}>
                Cadastrar planta
              </Text> */}
          </LinearGradient>
        </TouchableOpacity>
      </Background>
    </TouchableWithoutFeedback>
  );
}
