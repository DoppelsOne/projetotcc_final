import { Poppins_900Black } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Animated } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get("window").width;

// Animated.sequence([]);

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    // marginTop: getStatusBarHeight() + 1,

    marginVertical: 20,
  },

  content: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 70,
    backgroundColor: theme.color.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    width: `100%`,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonRegisterContainer: {
    
    position: "absolute",
    alignItems: "center",
    bottom: 30,
    // left: screenWidth/5,
  },

  buttonRegister: {
    position: "absolute",
    bottom: 40,
    width: 55,
    height: 55,
    borderRadius: 60/2,
    borderStyle: "solid",
    // paddingVertical: 6,
    // width: 250,
    // marginBottom: 16,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: theme.color.whiteHeading,
    shadowColor: theme.color.purpleDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  title: {
    fontSize: 18,
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    marginBottom: 4,
    paddingLeft: 3,
    textAlign: "left",
  },

  buttonText: {
    fontSize: 16,
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.whiteHeading,
    marginTop: 2,
  },
  // flatlist: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: theme.color.greenDark
  // },
});

// export const ButtonRegister = styled(LinearGradient).attrs({
//   colors: [ theme.color.orange, theme.color.orangeDark],
//   start: { x: 0, y: 0 },
//   end: { x: 1, y: 1 },
//   })`

// `
