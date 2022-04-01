import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    // width: `${screenWidth/1.2}px`
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },

  content: {
    paddingVertical: 26
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.white
  }, 

  flatlist: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.greenDark
  }, 
  
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,       
    marginVertical: 32,
  },
})