import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";

const screenWidth = Dimensions.get("window").width;

export const Container = styled(LinearGradient).attrs({
  colors: ["#008040", "#00d736"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  /* background-color: blue; */
`;

export const Image = styled.Image.attrs({
  resizeMode: "center",
})`
  width: 50%;
  height: 100px;

`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_700bold};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_400};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  /* background-color: red; */
`;

// export const Button = styled.TouchableOpacity`
//   background-color: ${theme.color.purpleDark};
//   padding: 12px;
//   border-radius: 8px;
//   width: 100%;
//   align-items: center;
//   border-style: solid;
//   margin-top: 16px;
// `;

export const TextForgot = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_400};  
`;

export const ContainerFooter = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 10px;
  /* background-color: black; */
`;

export const TextFooter = styled.Text`
width: 100%;
margin: 10px;
text-align: center;
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_500};  
`;
