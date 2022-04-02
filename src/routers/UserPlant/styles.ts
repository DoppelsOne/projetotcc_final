import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 30,
    // width: `${screenWidth/1.2}px`
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 10,
    marginBottom: 42,
  },

  content: {
    paddingVertical: 15,
    paddingLeft: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.white,
    marginBottom: 10,
    paddingLeft: 3
  }, 

  flatlist: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.greenDark
  },
})