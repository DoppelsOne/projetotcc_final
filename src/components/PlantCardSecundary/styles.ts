import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  background: {
    // width: '100%',
    marginRight: 8,
    borderRadius: 8,
    // paddingRight: 50,
    // marginBottom: 10
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
    elevation: 5,
    flexDirection: 'row',
  },    
  
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },

  information: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    maxHeight: 130,
    maxWidth: 180
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
    maxWidth: 150
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
})