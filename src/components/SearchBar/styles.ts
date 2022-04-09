import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {  
    backgroundColor: theme.color.overlay,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.color.whiteHeading,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: theme.color.greenDark
  },

  searchIcon: {
    paddingHorizontal: 8,
  },

  textInput: {
    fontSize: 14,
    width: 280,
    paddingTop: 2,
    fontFamily: theme.fonts.poppins_400,
  },
})