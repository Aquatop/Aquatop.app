import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  View,
  Top,
  Temperature,
  Label,
  Value,
  Ph,
  WaterLevel,
  EditButton,
  IconNotification,
} from './styles';

export default function Monitoring({ navigation }) {
  const [aquarium, setAquarium] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAquarium() {
      const aquariumInfo = navigation.getParam('aquarium');

      const response = await api.get(
        `/monitoring-microservice/monitoring/${aquariumInfo.name}`
      );

      setAquarium(response.data);
      setLoading(false);
    }

    loadAquarium();
  }, [navigation]);

  const handleClick = () => {};

  return (
    <Background>
      <Container>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#FFF" />
          </View>
        ) : (
          <>
            <Top>
              <Temperature>
                <Label>Temperatura</Label>
                <Value>{aquarium.temperature}</Value>
              </Temperature>

              <Ph>
                <Label>pH</Label>
                <Value>{aquarium.ph}</Value>
              </Ph>
            </Top>
            <WaterLevel>
              <Label>Nível de água</Label>
              <Value>{aquarium.waterLevel}</Value>
            </WaterLevel>

            <EditButton onPress={handleClick}>Editar aquário</EditButton>
          </>
        )}
      </Container>
    </Background>
  );
}

Monitoring.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('aquarium').fictionalName,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Notification', {
          aquarium: navigation.getParam('aquarium'),
        });
      }}
    >
      <IconNotification />
    </TouchableOpacity>
  ),
});
