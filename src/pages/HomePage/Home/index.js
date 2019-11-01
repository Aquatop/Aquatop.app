import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import api from '~/services/api';

import Background from '~/components/Background';
import AquariumBackground from '~/assets/AquariumBackground.png';

import {
  Container,
  View,
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
        {aquariums.length === 0 ? (
          <View>
            <ImageView>
              <Image
                source={AquariumBackground}
                style={{ width: 249, height: 249 }}
              />
            </ImageView>
            <Text>Adicione seu primeiro aquário!</Text>
          </View>
        ) : (
          <>
            <Title>Meus aquários</Title>

            <AquariumList
              data={aquariums}
              keyExtractor={aquarium => String(aquarium._id)}
              renderItem={({ item: aquarium }) => (
                <Aquarium
                  onPress={() =>
                    navigation.navigate('Monitoring', { aquarium })
                  }
                >
                  <Name>{aquarium.fictionalName}</Name>
                </Aquarium>
              )}
            />
          </>
        )}
      </Container>
    </Background>
  );
}
