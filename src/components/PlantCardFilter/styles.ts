import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    // borderRadius: 16,
    // paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: theme.color.white,
    // shadowColor: theme.color.purpleDark,
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.5,
    // elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 3,
  },

  text: {
    color: theme.color.gray,
    fontFamily: theme.fonts.poppins_500,
    // paddingBottom: 5,
  },

  FocusedContainer: {
    // marginRight: 0,
    // borderRadius: 16,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // marginBottom: 2,
    // backgroundColor: theme.color.greenWeak,
    borderBottomWidth: 3,
    borderColor: theme.color.green,
    // shadowColor: theme.color.purpleDark,
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.5,
    // elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 2,
  },

  FocusedText: {
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    paddingBottom: 5,
  },
})