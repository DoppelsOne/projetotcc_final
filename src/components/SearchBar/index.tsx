import { TextInput, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { theme } from "../../global/theme";

import { styles } from "./styles";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <Feather 
          name='search'
          size={22}
          color={theme.color.whiteHeading}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder='Pesquisar planta'
        selectionColor={theme.color.whiteHeading}
        placeholderTextColor={theme.color.white}
      />
    </View>
  )
}