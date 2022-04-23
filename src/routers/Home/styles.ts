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
    paddingBottom: 70,
    paddingLeft: 30,
    backgroundColor: theme.color.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },

  title: {
    fontSize: 16,
    color: theme.color.purpleDark,
    marginBottom: 8,
    paddingLeft: 3,
    fontFamily: theme.fonts.poppins_700bold
  }, 

  seeMore: {
    fontSize: 14,
    color: theme.color.grayDark,
    marginBottom: 8,
    paddingLeft: 3,
    fontFamily: theme.fonts.poppins_500,
    marginRight: 35
  },

  filterIcon: {
    // color: theme.color.whiteHeading,
    // backgroundColor: theme.color.orangeMedium,
    padding: 13,
    borderRadius: 16,
    alignSelf: 'center', 
    justifyContent: 'center',
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})