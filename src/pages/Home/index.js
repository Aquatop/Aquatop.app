import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';
import AquariumBackground from '~/assets/AquariumBackground.png';

import { Container, ImageView, Text } from './styles';

export default function Home({ navigation }) {
  return (
    <Background>
      <Container>
        <ImageView>
          <Image
            source={AquariumBackground}
            style={{ width: 249, height: 249 }}
          />
        </ImageView>
        <Text>Adicione seu primeiro aquário!</Text>
      </Container>
    </Background>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="zodiac-aquarius" size={45} color={tintColor} />
  ),
};
