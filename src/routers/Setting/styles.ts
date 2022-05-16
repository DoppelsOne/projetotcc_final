import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  padding-left: 30px;
  width: 100%;
  flex-direction: row;
  padding-top: ${getStatusBarHeight() + 20};
`;
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

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 20px;
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
