import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import AquariumBackground from '~/assets/AquariumBackground.png';

import {
  Container,
  Title,
  ImageView,
  Text,
  AquariumList,
  Aquarium,
  Name,
} from './styles';

export default function Home({ navigation }) {
  const [aquariums, setAquariums] = useState([]);

  useEffect(() => {
    async function loadAquariums() {
      const response = await api.get(
        '/aquarium-microservice/aquarium?owner=true'
      );

      setAquariums(response.data);
    }
    loadAquariums();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Meus aquários</Title>

        {aquariums.length === 0 ? (
          <>
            <ImageView>
              <Image
                source={AquariumBackground}
                style={{ width: 249, height: 249 }}
              />
            </ImageView>
            <Text>Adicione seu primeiro aquário!</Text>
          </>
        ) : (
          <AquariumList
            data={aquariums}
            keyExtractor={aquarium => String(aquarium._id)}
            renderItem={({ item: aquarium }) => (
              <Aquarium onPress={() => {}}>
                <Name>{aquarium.fictionalName}</Name>
              </Aquarium>
            )}
          />
        )}
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
