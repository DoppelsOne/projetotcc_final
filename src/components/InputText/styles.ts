import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  margin-bottom: 8,
  padding-right: 44  
  },
`

export const TextInput = styled.TextInput`
background-color: white;
padding: 5px;
border-radius: 4px;
width: ${screenWidth/1.5}px;
margin: 10px;
`;