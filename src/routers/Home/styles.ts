import styled from 'styled-components/native'
import { Dimensions, Animated, FlatList, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import{StyleSheet,StatusBar} from 'react-native'
const screenWidth = Dimensions.get('window').width;




 export const Container = styled(LinearGradient).attrs({
     colors: ['#008040', '#00d736'],
     start: { x: 0, y: 0 },
     end: { x: 1, y: 1 },
 })`
 padding-top: ${90 + getStatusBarHeight(true)}px;
 flex: 1;
 justify-content: space-around;
 align-items: flex-start;
 flex-direction:row;
 
`;


export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#998',
    
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



    // export const sty = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         marginTop: StatusBar.currentHeight || 0,
    //       },
    //       item: {
    //         backgroundColor: '#f9c2ff',
    //         padding: 20,
    //         marginVertical: 8,
    //         marginHorizontal: 16,
    //       },
    //       title: {
    //         fontSize: 32,
    //       },
    //     });
        
    


