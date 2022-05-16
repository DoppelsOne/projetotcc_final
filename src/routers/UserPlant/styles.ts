import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from 'styled-components/native'
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 10,
    marginBottom: 20,
  },

  content: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 70,
    paddingLeft: 30,
    backgroundColor: theme.color.white,    
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },

  buttonRegisterContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 80,
    right: 30,
  }, 
   
  buttonRegister: {
    padding: 18,
    borderRadius: 35,
    borderStyle: 'solid',
    // paddingVertical: 6,
    // width: 250,
    // marginBottom: 16,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: theme.color.whiteHeading,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

  title: {
    fontSize: 18,
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    marginBottom: 4,
    paddingLeft: 3
  },

  buttonText: {
    fontSize: 16,
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.whiteHeading,
    marginTop: 2,
  }
  // flatlist: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: theme.color.greenDark
  // },
})

// export const ButtonRegister = styled(LinearGradient).attrs({
//   colors: [ theme.color.orange, theme.color.orangeDark],
//   start: { x: 0, y: 0 },
//   end: { x: 1, y: 1 },
//   })`
  
// `
