import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

const screenWidth = Dimensions.get('window').width;

export const Container = styled(LinearGradient).attrs({
  colors: [theme.color.green, theme.color.greenLight],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;

`

export const Content = styled.View`
  flex: 1;
  background-color: ${theme.color.white};
  height: 100%;
  padding: 30px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`

export const ContainerTitle = styled.View`
  /* width: ${screenWidth/1.2}px; */
  padding-left: 20px;
  padding-right: 20px;
`

export const Wrapper = styled.View`
  width: ${screenWidth/1.2}px;
  padding-bottom: 30px;
`

export const Title = styled.Text`
  font-family: ${theme.fonts.poppins_700bold};
  color: ${theme.color.purpleDark}
  font-size: 30px;
  margin-top: 50px;
`

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.whiteHeading}
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: -10px;
`

export const DescriptionInputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  height: 260px;
  width: 330px;
  border-width: 2px; 
  border-radius: 16px;
  border-color: ${theme.color.gray};
  font-family: ${theme.fonts.poppins_700bold};
  background-color: ${theme.color.whiteHeading};
`

export const CheckBoxContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
export const CheckBoxCategotyContainer = styled.View`
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const CheckBoxCategotyContent = styled.View`
  flex-direction: row;
`

export const TextSwap = styled.Text`
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.purpleDark}
  font-size: 16px;
`

export const CheckBoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const CheckBoxText = styled.Text`
  font-family: ${theme.fonts.poppins_500};
  color: ${theme.color.purpleDark}
  font-size: 16px;
`

export const styles = StyleSheet.create({
  DescriptionIcon: {
    fontSize: 28,    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: theme.color.gray,
    paddingHorizontal: 10,
    paddingTop: 12,
    marginRight: 3
  },

  DescriptionInput: {
    width: 265, 
    paddingLeft: 2,
    paddingTop: 16,          
    fontFamily: theme.fonts.poppins_500, 
    fontSize: 15,
    color: theme.color.purpleDark,
  }
})
