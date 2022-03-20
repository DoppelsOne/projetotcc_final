import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
flex: 1;
background-color: red;
justify-content: center;
align-items: center;
`;

export const Title = styled.Text`
`;

export const Form = styled.View`
flex-direction: row;
justify-content: space-around;
width: ${screenWidth/2}px;
`;

export const Input = styled.TouchableOpacity`
background-color: white;
padding: 10px;
border-radius: 5px;
width: 100px;
justify-content: center;
align-items: center;
border-radius: 8px;
`;

export const InputText = styled.TextInput`
background-color: white;
padding: 5px;
border-radius: 4px;
width: ${screenWidth/1.5}px;
margin: 10px;
`;

export const Link = styled.Text`


`;