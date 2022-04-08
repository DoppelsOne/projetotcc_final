import React from 'react'
import { Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Container, Content, Wrapper, Text, Description, Subtitle, Information, ImageContainer, Title } from './styles'

export default function PlantDetails() {
  return (
    <Container>
      <Wrapper>
        <StatusBar backgroundColor="transparent" style="light" translucent />
        <ImageContainer>
          <Image 
            source={require('../../../assets/plants/samambaia.jpg')}
            style={{width: '100%', height: 350}}
          />
        </ImageContainer>
      </Wrapper>
        <Content>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Information>
              <Title>Samambaia</Title>
              <Subtitle>Interior</Subtitle>
            </Information>
            <Description>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nobis nesciunt rem! Nemo, consectetur culpa! Maiores laudantium officia assumenda mollitia tenetur, delectus quibusdam atque corrupti voluptatibus quas animi adipisci?</Text>
            </Description>
         </ScrollView>
       </Content>
    </Container>
  )
}