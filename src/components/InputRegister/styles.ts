import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../global/theme"
import { Background } from './../Background/index';

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginTop: 10,
    height: 45,
    borderWidth: 1, 
    borderRadius: 8,
    borderColor: theme.color.gray,
    backgroundColor: theme.color.whiteHeading,
    marginRight: 5 
  },
  
  icon: {
    fontSize: 28,    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: theme.color.gray,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginRight: 3,

  },
  
  input: {
    width: '100%',
    fontSize: 16,  
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.purpleDark,
  },
})
