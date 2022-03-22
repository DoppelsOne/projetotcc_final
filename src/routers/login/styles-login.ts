import styled from 'styled-components/native'
import { Dimensions, Animated} from 'react-native';
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
flex-direction:column;
`;



export const Image = styled.Image.attrs({
    resizeMode: 'stretch',
})`
width: 50%;
height: 200px;

`;

export const Form = styled.View`
flex-direction: row;
justify-content: space-around;
width: ${screenWidth/1}px;
align-items: center;
margin: 10px;

`;

export const Input = styled.TouchableOpacity`
background-color: #a5f1ef;
padding: 12px;
border-radius: 5px;
width: 40%;
align-items: center;
border-radius: 5px;
border-style: solid;
`;

export const TextBtn = styled.Text`
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
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
text-decoration: none ;
`;

export const Link = styled.Text`
font-size: 15px;
text-decoration: underline;
padding-top: 100px;
`;