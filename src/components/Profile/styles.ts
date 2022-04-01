import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  user: {
    flexDirection: 'row',
  },

  greeting: {
    fontSize: 17,
    color: theme.color.whiteHeading,
    marginTop: 5,
  },
  
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.color.greenDark,
    marginTop: -7,
  },

  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 80
  }
})