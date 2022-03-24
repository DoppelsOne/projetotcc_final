import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../global/theme"

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 8,   
  },
  
  icon: {
    fontSize: 20,    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: theme.color.white,
    backgroundColor: theme.color.greenDark,
    paddingHorizontal: 10,
    paddingTop: 13,
    marginRight: 3
  },
  
  input: {
    width: '87%',
    backgroundColor: theme.color.white,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
    marginBottom: 1,
    
  },
})
