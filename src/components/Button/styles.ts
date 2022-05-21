import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    marginTop:10,
    borderRadius: 16,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: theme.color.whiteHeading,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.whiteHeading,
  }

})