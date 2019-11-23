import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import WaterLevelBar from '~/components/WaterLevelBar';

import {
  Container,
  View,
  Top,
  Temperature,
  Label,
  Value,
  Ph,
  WaterLevelContainer,
  EditButton,
  IconNotification,
  CommandButton,
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
            <WaterLevelContainer>
              <Label>Nível de água: {aquarium.waterLevel}%</Label>
              <WaterLevelBar waterLevel={Number(aquarium.waterLevel)} />
            </WaterLevelContainer>

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

            <Top>
              <CommandButton style={{ marginRight: 10 }}>
                <Icon name="food" size={40} color="#000" />
              </CommandButton>

              <CommandButton style={{ marginRight: 10 }}>
                <Icon name="lightbulb" size={33} color="#000" />
              </CommandButton>

              <CommandButton style={{ marginRight: 10 }}>
                <Icon name="lightbulb-off" size={33} color="#000" />
              </CommandButton>

              <CommandButton style={{ marginRight: 10 }}>
                <Icon name="swap-vertical-bold" size={36} color="#000" />
              </CommandButton>

              <CommandButton>
                <Icon name="refresh" size={34} color="#000" />
              </CommandButton>
            </Top>

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
