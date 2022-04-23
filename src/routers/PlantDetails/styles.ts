import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../../global/theme';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  width: ${screenWidth/1}px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${theme.color.white};
  margin-top: -10px;
`

export const Information = styled.View`
  margin-bottom: 15px;
  
`

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: -8px;
  font-family: ${theme.fonts.poppins_700bold};
  color: ${theme.color.purpleDark};
  `


export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${theme.color.gray}
  font-family: ${theme.fonts.poppins_500};
  
`

export const About = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.poppins_700bold};
  color: ${theme.color.purpleDark};
  padding-bottom: 5px;
`

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.poppins_400};
  line-height: 29px;
  color: ${theme.color.grayDark};
  margin-bottom: 16px;
`

export const TextLocalization = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.poppins_500};
  line-height: 29px;
  color: ${theme.color.purpleDark};
  margin-bottom: 16px;
`


