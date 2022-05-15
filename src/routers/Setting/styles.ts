import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { wrap } from "lodash";

const screenWidth = Dimensions.get("window").width;

export const Image = styled.Image.attrs({
  resizeMode: "center",
})`
  height: 100%;
  width: 100%;
`;

export const ImgView = styled.View`
  height: 100px;
  width: 90%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: ${30 + getStatusBarHeight(true)}px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    marginTop: getStatusBarHeight() + 10,
  },

  content: {
    flex: 1,
    flexDirection:"row",
    width: `100%`,
    paddingTop: 15,
    paddingLeft: 30,
    backgroundColor: theme.color.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: 16,

  },

  buttonRegisterContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 80,
    right: 30,
  },

  buttonRegister: {
    padding: 18,
    borderRadius: 35,
    borderStyle: "solid",
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
    elevation: 5,
  },

  title: {
    fontSize: 18,
    color: theme.color.purpleDark,
    fontFamily: theme.fonts.poppins_700bold,
    marginBottom: 4,
    paddingLeft: 3,
  },

  buttonText: {
    fontSize: 16,
    fontFamily: theme.fonts.poppins_500,
    color: theme.color.whiteHeading,
    marginTop: 2,
  },
});
