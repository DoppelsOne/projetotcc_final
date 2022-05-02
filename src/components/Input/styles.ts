import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 8,
    height: 56,
    borderWidth: 1, 
    borderRadius: 16,
    borderColor: theme.color.whiteHeading,
    backgroundColor: theme.color.overlay,
  },
  
  icon: {
    fontSize: 28,    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: theme.color.whiteHeading,
    paddingHorizontal: 10,
    paddingTop: 12,
    marginRight: 3
  },
  
  input: {
    width: '83%',
    paddingTop: 6,
    fontSize: 16,  
    fontFamily: theme.fonts.poppins_700bold,
    color: theme.color.purpleDark
  },
})
