import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  align-items: center;  
`;

// export const Image = styled.Image.attrs({
//   resizeMode: "center",
// })`
//   height: 100%;
//   width: 100%;
// `;

// export const ImgView = styled.View`
//   height: 100px;
//   width: 90%;
//   padding: 10px;
//   /* background-color: ${theme.color.whiteHeading}; */
//   border-radius: 20px;
//   `;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${30 + getStatusBarHeight(true)}px;
  padding: 15px;
`;

export const AvatarView = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: ${theme.color.greenLight}
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 95%;
  height: 95%;
  border-radius: 50px;
`;

export const TextEditPhoto = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_500};
  margin-top: 10px;
`;

export const Wrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Password = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_500};
  padding-left: 5px;
`;

export const TextchangePassword = styled.Text`
  font-size: 15px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_400};
  /* text-align: right; */
  padding-right: 5px;
`;

export const TextDesconect = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_500};
  /* padding-top: 10px; */
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
