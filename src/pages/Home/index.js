import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

import AquariumBackground from '~/assets/AquariumBackground.png';

import {
  Container,
  ContainerCenter,
  ImageView,
  Text,
  IconView,
  ButtonView,
  BorderView,
} from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <ContainerCenter>
        <ImageView>
          <Image
            source={AquariumBackground}
            style={{ width: 249, height: 249 }}
          />
        </ImageView>
        <Text>Adicione seu primeiro aquário!</Text>
        <ButtonView>
          <IconView
            onPress={() => {
              navigation.navigate('NewAquarium');
            }}
          >
            <BorderView>
              <Icon name="add" size={40} />
            </BorderView>
          </IconView>
        </ButtonView>
      </ContainerCenter>
    </Container>
  );
}
