import React from 'react';
import { Image } from 'react-native';
import  Header  from '~/components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AquariumBackground from '~/assets/AquariumBackground.png';

import { Container, ContainerCenter, ImageView, Text, IconView, ButtonView } from './styles';


export default function Home() {
  return(
    <Container>
      <Header />
      <ContainerCenter>
        <ImageView>
          <Image source={AquariumBackground} style={{width: 249, height: 249}} />
        </ImageView>
        <Text>
          Adicione seu primeiro aquário!
        </Text> 
        <ButtonView>
          <IconView>
            <Icon name="add" size={40} />
          </IconView>    
        </ButtonView>
      </ContainerCenter>
    </Container>
  );
}
