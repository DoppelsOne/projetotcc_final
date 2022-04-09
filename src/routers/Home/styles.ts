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
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 30,
    backgroundColor: theme.color.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },

  title: {
    fontSize: 18,
    color: theme.color.purpleDark,
    marginBottom: 8,
    paddingLeft: 3,
    fontFamily: theme.fonts.poppins_700bold
  }, 

  seeMore: {
    fontSize: 16,
    color: theme.color.green,
    marginBottom: 8,
    paddingLeft: 3,
    fontFamily: theme.fonts.poppins_500,
    marginRight: 35
  }
  // flatlist: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: theme.color.greenDark
  // },
})