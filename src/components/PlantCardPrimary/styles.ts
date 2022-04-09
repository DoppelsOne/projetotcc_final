import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  background: {
    marginRight: 8,
    borderRadius: 8,
    marginBottom: 15
  },

  container: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: theme.color.whiteHeading,
    borderRadius: 10,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }, 
  
  content: {
    // marginRight: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },

  information: { 
    paddingHorizontal: 5
  },

  contentText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    textAlign: 'left',
    fontSize: 18,
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    marginBottom: -10,
  },

  text: {
    color: theme.color.gray,
    fontFamily: theme.fonts.poppins_400,
    paddingTop: 10,
    marginBottom: -5
  },

  price: {
    fontSize: 18,
    color: theme.color.green,
    fontFamily: theme.fonts.poppins_700bold,
  },

  status: {
    color: theme.color.gray,
    marginBottom: -12,
    marginTop: 10,
    fontFamily: theme.fonts.poppins_400,
  },

})