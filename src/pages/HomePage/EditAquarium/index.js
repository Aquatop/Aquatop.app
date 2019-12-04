import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import TimeInput from '~/components/TimeInput';
import api from '~/services/api';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  AmountButton,
  AmountView,
  AmountText,
  QuantityView,
  Separator,
} from './styles';

export default function EditAquarium({ navigation }) {
  const [fictionalName, setFictionalName] = useState('');
  const [fishSpecie, setFishSpecie] = useState('');
  const [fishAmount, setFishAmount] = useState(0);
  const [feedTime, setFeedTime] = useState('');
  const [lightOn, setLightOn] = useState('');
  const [lightOff, setLightOff] = useState('');
  const [food, setFood] = useState(0);
  const [aquarium, setAquarium] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAquarium() {
      const aquariumInfo = navigation.getParam('aquarium');

      const response = await api.get(
        `/aquarium-microservice/aquarium/${aquariumInfo.name}`
      );

      setFictionalName(response.data.fictionalName);
      setFishSpecie(response.data.fish);
      setFishAmount(response.data.fishQuantity);
      setFeedTime(response.data.foodInterval);
      setLightOn(response.data.turnOnLight);
      setLightOff(response.data.turnOffLight);
      setFood(response.data.foodQuantity);
      setAquarium(response.data);

      setLoading(false);
    }

    loadAquarium();
  }, [navigation]);

  const handleFishDecrement = () => {
    if (fishAmount > 0) {
      setFishAmount(fishAmount - 1);
    }
  };

  // const handleFoodIncrement = () => {
  //   setFood(food + 1);
  // };

  // const handleFoodDecrement = () => {
  //   if (food > 0) {
  //     setFood(food - 1);
  //   }
  // };

  const handleFishIncrement = () => {
    setFishAmount(fishAmount + 1);
  };

  const handleSubmit = async () => {
    try {
      await api.put(`/aquarium-microservice/aquarium/${aquarium.name}`, {
        fictionalName,
        fish: fishSpecie,
        foodQuantity: food,
        fishQuantity: fishAmount,
        foodInterval: feedTime,
        turnOnLight: lightOn,
        turnOffLight: lightOff,
      });

      Alert.alert('Sucesso! Aquario atualizaado com sucesso!');
    } catch (err) {
      Alert.alert('Erro! Verifique os campos preenchidos!');
    }
  };

  return (
    <Background>
      <Container>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#FFF" />
          </View>
        ) : (
          <>
            <Form>
              <FormInput
                icon="create"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome fictício do aquário"
                returnKeyType="send"
                // onSubmitEditing={() => {}}
                value={fictionalName}
                onChangeText={setFictionalName}
              />
              <AmountView>
                <FormInput
                  icon="create"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Espécie dos peixes"
                  returnKeyType="next"
                  value={fishSpecie}
                  onChangeText={setFishSpecie}
                />
                <QuantityView>
                  <AmountButton onPress={handleFishDecrement}>
                    <Icon name="remove-circle" size={30} color="white" />
                  </AmountButton>
                  <AmountText>{fishAmount}</AmountText>
                  <AmountButton onPress={handleFishIncrement}>
                    <Icon name="add-circle" size={30} color="white" />
                  </AmountButton>
                </QuantityView>
              </AmountView>

              <Separator />

              <FormInput
                icon="access-time"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Intervalo de alimentação(h)"
                returnKeyType="next"
                value={feedTime}
                onChangeText={setFeedTime}
                keyboardType="numeric"
                maxLength={2}
              />

              {/* <AmountView>
                <AmountText>Quantidade de ração (g) </AmountText>
                <QuantityView>
                  <AmountButton onPress={handleFoodDecrement}>
                    <Icon name="remove-circle" size={30} color="white" />
                  </AmountButton>
                  <AmountText>{food}</AmountText>
                  <AmountButton onPress={handleFoodIncrement}>
                    <Icon name="add-circle" size={30} color="white" />
                  </AmountButton>
                </QuantityView>
              </AmountView> */}

              <TimeInput
                text="Horário de ligar a luz"
                time={lightOn}
                setTime={time => setLightOn(time)}
              />

              <TimeInput
                text="Horário de desligar a luz"
                time={lightOff}
                setTime={time => setLightOff(time)}
              />

              <SubmitButton onPress={handleSubmit}>Editar</SubmitButton>
            </Form>
          </>
        )}
      </Container>
    </Background>
  );
}
