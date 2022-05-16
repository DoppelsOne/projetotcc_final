import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { wrap } from "lodash";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

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
  background-color: ${theme.color.whiteHeading};
  border-radius: 20px;
  margin-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Content = styled.View`
  flex: 1; 
  padding-top: 15px;
  background-color: ${theme.color.white};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  margin-top: 16px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const AvatarView = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: white;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${theme.color.purpleDark};
  font-family: ${theme.fonts.poppins_700bold};
`;

export const TextEditPhoto = styled.Text`
  font-size: 16px;
  color: ${theme.color.green};
  font-family: ${theme.fonts.poppins_500};
  padding-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

// export const styles = StyleSheet.create({
//   content: {
//     flex: 1,
//     flexDirection:"row",
//     width: `100%`,
//     paddingTop: 15,
//     paddingLeft: 30,
//     backgroundColor: theme.color.white,
//     borderTopRightRadius: 16,
//     borderTopLeftRadius: 16,
//     marginTop: 16,

//   },

//   buttonRegisterContainer: {
//     position: "absolute",
//     alignSelf: "flex-end",
//     bottom: 80,
//     right: 30,
//   },

//   buttonRegister: {
//     padding: 18,
//     borderRadius: 35,
//     borderStyle: "solid",
//     // paddingVertical: 6,
//     // width: 250,
//     // marginBottom: 16,
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // borderWidth: 2,
//     // borderColor: theme.color.whiteHeading,
//     shadowColor: theme.color.purpleDark,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },

//   title: {
//     fontSize: 18,
//     color: theme.color.purpleDark,
//     fontFamily: theme.fonts.poppins_700bold,
//     marginBottom: 4,
//     paddingLeft: 3,
//   },

//   buttonText: {
//     fontSize: 16,
//     fontFamily: theme.fonts.poppins_500,
//     color: theme.color.whiteHeading,
//     marginTop: 2,
//   },
// });
