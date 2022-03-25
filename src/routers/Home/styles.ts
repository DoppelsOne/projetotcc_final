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


export const TextInput = styled.TextInput.attrs({
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