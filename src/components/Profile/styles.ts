import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  greeting: {
    fontSize: 20,
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_500,
  },
  

  subtitle: {
    fontSize: 15,
    color: theme.color.whiteHeading,
    fontFamily: theme.fonts.poppins_400,
  },

  // iconContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   width: 'auto',
  //   marginLeft: 52,
  //   paddingLeft: 50,
  // },

  // icon: {
  //   backgroundColor: theme.color.purpleDark, 
  //   padding: 14, 
  //   borderRadius: 15,
  //   marginRight: -5
  // },
})