import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../../global/theme';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;  
`

export const Wrapper = styled.View`
`

export const ImageContainer = styled.View`

`

export const Content = styled.View`
  flex: 1;
  width: ${screenWidth/1}px;
  padding: 10px 20px;
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

export const Description = styled.View`

`

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${theme.color.gray}
  font-family: ${theme.fonts.poppins_500};

`

export const Text = styled.Text`
  font-family: ${theme.fonts.poppins_400};
  color: ${theme.color.purpleDark}
`


