import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {getStatusBarHeight} from 'react-native-status-bar-height'

const screenWidth = Dimensions.get('window').width;

export const Container = styled(LinearGradient).attrs({
    colors: ['#008040', '#00d736'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
padding-top: ${30 + getStatusBarHeight(true)}px;
flex: 1;
justify-content: center;
align-items: center;
`;



export const Title = styled.Text`
`;

export const Form = styled.View`
flex-direction: row;
justify-content: space-around;
width: ${screenWidth/1}px;
align-items: center;
margin: 10px;
`;

export const Input = styled.TouchableOpacity`
background-color: white;
padding: 10px;
border-radius: 5px;
width: 40%;
justify-content: center;
background-color: #93ffff;
align-items: center;
border-radius: 5px;

`;

export const InputText = styled.TextInput.attrs({
placeholderTextColor: '#999',
})`
background-color: white;
padding: 5px;
border-radius: 5px;
width: 75%;
margin: 10px;
justify-content: center;
align-items: center;
font-size: 16px;
`;

export const Link = styled.Text`


`;