import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {  
    backgroundColor: theme.color.whiteHeading,
    borderRadius: 8,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: theme.color.greenDark
  },

  searchIcon: {
    paddingHorizontal: 6,
  },

  textInput: {
    fontSize: 14,
    width: 280,
    fontFamily: theme.fonts.poppins_400,
    paddingTop: 2
  },
})