import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  user: {
    flexDirection: 'row',
    marginLeft: -90,
    paddingTop: 3,
  },

  greeting: {
    fontSize: 16,
    color: theme.color.whiteHeading,
    fontFamily: theme.fonts.poppins_400,
  },
  
  userName: {
    fontSize: 28,
    fontFamily: theme.fonts.poppins_700bold,
    color: theme.color.purpleDark,
    marginTop: -10,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    // marginLeft: 52,
    // paddingLeft: 50,
  },

  icon: {
    backgroundColor: theme.color.purpleDark, 
    padding: 14, 
    borderRadius: 15,
    marginRight: -5
  },
})