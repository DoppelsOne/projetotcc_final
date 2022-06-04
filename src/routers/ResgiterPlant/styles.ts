import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get("window").width;

export const Container = styled(LinearGradient).attrs({
  colors: [theme.color.green, theme.color.greenLight],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  justify-content: center;
  align-items: center;
`;

export const Button2 = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${theme.fonts.poppins_500};  
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  background-color: ${theme.color.white};
  height: 100%;
  padding: 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: 10px;
`;

export const Wrapper = styled.View`
  width: ${screenWidth / 1.2}px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.poppins_700bold};
  color: ${theme.color.purpleDark};
  font-size: 30px;
  text-align: center;
  line-height: 32px;
  margin-top: 15px; 
`;

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.whiteHeading};
  font-size: 16px;
  margin-top: 10px; 
`;

export const CheckBoxContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
`;

export const TextSwap = styled.Text`
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.purpleDark};
  font-size: 16px;
`;

export const LayoutImage = styled.View`
  height: 130px;
  margin-top: 10px;
`;

export const ImagePlant = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 2,
    borderRadius: 8
  },

  buttonPlant: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: theme.color.whiteHeading,
    borderWidth: 1, 
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },

  inputPrice: { 
    flexDirection: "row",
    width: '100%',
    backgroundColor: theme.color.whiteHeading,
    borderWidth: 1, 
    borderRadius: 8,
    padding: 10,
    marginTop: 10
  }
});
