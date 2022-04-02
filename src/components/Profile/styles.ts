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
  },
  
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.color.greenDark,
    marginTop: -7,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 52
  },

  icon: {
    backgroundColor: theme.color.overlay, 
    padding: 10, 
    borderRadius: 30
  }
})