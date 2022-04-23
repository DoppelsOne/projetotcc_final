import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/theme';

const screenWidth = Dimensions.get('window').width;

export const Container = styled(LinearGradient).attrs({
  colors: ['#008040', '#00d736'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  })`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  width: ${screenWidth/1.2}px;
  margin-top: 20px;
`

export const Wrapper = styled.View`
  align-items: center;
`

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 35%;
  height: 115px;
`;


export const Title = styled.Text`
  font-size: 30px;
  color: ${theme.color.whiteHeading}
  font-family: ${theme.fonts.poppins_700bold};
  text-align: left;
  margin-bottom: -10px;
  margin-top: 10px;
`

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${theme.color.whiteHeading}
  text-align: left;
  margin-bottom: 10px;
  font-family: ${theme.fonts.poppins_400};
`

export const Or = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading}
  text-align: center;
  margin-bottom: 10px;
  font-family: ${theme.fonts.poppins_400};

`

// export const Button = styled.TouchableOpacity`
//   background-color: ${theme.color.purpleDark};
//   padding: 12px;
//   border-radius: 8px;
//   width: 100%;
//   align-items: center;
//   border-style: solid; 
//   margin-top: 16px;
// `;



export const ButtonFooter = styled.TouchableOpacity`  
  align-items: flex-end;
  margin-top: 12px;
  margin-bottom: 12px;
`
export const TextForgot = styled.Text`
  font-size: 16px;
  color: ${theme.color.whiteHeading}
  font-family: ${theme.fonts.poppins_400};  
`

export const ContainerFooter = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`

export const TextFooter = styled.Text`
  font-size: 20px;
  color: ${theme.color.whiteHeading}
  font-family: ${theme.fonts.poppins_500};  
`


