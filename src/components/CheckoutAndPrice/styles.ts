import { Dimensions } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import styled from "styled-components/native";

import { theme } from "../../global/theme";

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${screenWidth/1}px;
  padding: 8px 20px;
  padding-top: 10px;
  background-color: ${theme.color.whiteHeading};
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
`

export const Content = styled.View`

`

export const Title = styled.Text`
  font-family: ${theme.fonts.poppins_400};
  color: ${theme.color.gray};
  margin-bottom: -10px;
`

export const TypeMoney = styled.Text`
  font-size: 18px;
  color: ${theme.color.purpleDark};
  font-family: ${theme.fonts.poppins_700bold};
  padding-right: 3px;
`

export const Price = styled.Text`
  font-size: 26px;
  color: ${theme.color.purpleDark};
  font-family: ${theme.fonts.poppins_700bold};
`

export const Button = styled(LinearGradient).attrs({
  colors: [theme.color.orange, theme.color.orangeDark],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 75px;
  border-radius: 16px;
  shadow-color: ${theme.color.purpleDark};
  shadow-offset: {width: 0, height: 10};
  shadow-opacity: 0.25;
  shadow-radius: 3.5px;
  elevation: 5;
`

export const TitleButton = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.whiteHeading};
  margin-top: 3px;
`