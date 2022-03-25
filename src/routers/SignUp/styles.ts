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

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 35%;
  height: 115px;
`;

export const Content = styled.View`
  width: ${screenWidth/1.2}px;
  align-items: center;  
`

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${theme.color.white}
  text-align: left;
  margin-bottom: 10px;
`

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.color.white}
  text-align: center;
  margin-bottom: 30px;
`

export const Form = styled.View`
   
`


export const Button = styled.TouchableOpacity`
  background-color: ${theme.color.greenDark};
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  align-items: center;
  border-style: solid; 
  margin-top: 16px;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  color: ${theme.color.white};
  font-weight: bold;
`

export const ContainerFooter = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const TextFooter = styled.Text`
  font-size: 16px;
  color: ${theme.color.white}
  text-align: center;
`

export const ButtonFooter = styled.TouchableOpacity`  
  text-align: center;
`
