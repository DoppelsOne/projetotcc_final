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
  flex-wrap: wrap;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: "center",
})`
  width: 80%;
  height: 115px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_700bold};
  margin-top: 15px;

`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_400};
`;

export const Or = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  text-align: center;
  font-family: ${theme.fonts.poppins_400};
  margin: 8px;

`;

export const ButtonFooter = styled.TouchableOpacity``;

export const ContainerFooter = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const TextFooter = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading};
  font-family: ${theme.fonts.poppins_500}; 
`;
