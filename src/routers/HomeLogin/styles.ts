import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
    // width: `${screenWidth/1.2}px`
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 10,
    marginVertical: 20,
  },

  content: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 40,
    paddingLeft: 30,
    backgroundColor: theme.color.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  title: {
    fontSize: 18,
    color: theme.color.purpleDark,
    marginBottom: 12,
    paddingLeft: 3,
    fontFamily: theme.fonts.poppins_700bold
  }, 

  // flatlist: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: theme.color.greenDark
  // },
})