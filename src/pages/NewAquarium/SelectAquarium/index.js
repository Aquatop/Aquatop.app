import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, AquariumList, Aquarium, Name } from './styles';

export default function SelectAquarium({ navigation }) {
  const [aquariums, setAquariums] = useState([]);

  useEffect(() => {
    async function loadAquariums() {
      // const response = await api.get('aquariums');
      // setAquariums(response.data);

      setAquariums([
        { _id: '1', name: 'AQUARIO_1' },
        { _id: '2', name: 'AQUARIO_2' },
      ]);
    }

    loadAquariums();
  }, []);

  return (
    <Background>
      <Container>
        <AquariumList
          data={aquariums}
          keyExtractor={aquarium => String(aquarium._id)}
          renderItem={({ item: aquarium }) => (
            <Aquarium
              onPress={() => navigation.navigate('InsertPin', { aquarium })}
            >
              <Name>{aquarium.name}</Name>
            </Aquarium>
          )}
        />
      </Container>
    </Background>
  );
}

SelectAquarium.navigationOptions = ({ navigation }) => ({
  title: 'Selecione seu aquário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
