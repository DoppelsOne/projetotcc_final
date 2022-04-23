import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 8,
    height: 56,
    borderWidth: 2, 
    borderRadius: 16,
    borderColor: theme.color.gray,
    backgroundColor: theme.color.whiteHeading,
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
    width: '83%',
    paddingTop: 6,
    fontSize: 16,  
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.purpleDark
  },
})
