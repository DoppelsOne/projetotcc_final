import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    borderWidth: 1, 
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 16,
    borderColor: theme.color.whiteHeading,
    backgroundColor: theme.color.overlay,
    marginTop: 10,
  },
  
  icon: {
    fontSize: 22,    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: theme.color.whiteHeading,
    paddingHorizontal: 10,
    marginRight: 3
  },
  
  input: {
    width: '83%',
    margin: 10,
    fontSize: 16,  
    fontFamily: theme.fonts.poppins_700bold,
    color: theme.color.purpleDark
  },
})
