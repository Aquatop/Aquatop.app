import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

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
} from './styles';

export default function CustomizeAquarium({ navigation }) {
  const [fictionalName, setFictionalName] = useState('');
  const [fishSpecie, setFishSpecie] = useState('');
  const [fishAmount, setFishAmount] = useState(0);
  const [feedTime, setFeedTime] = useState('');
  const [lightOn, setLightOn] = useState('');
  const [lightOff, setLightOff] = useState('');
  const [food, setFood] = useState(0);
  const [aquarium, setAquarium] = useState({});

  useEffect(() => {
    setAquarium(navigation.getParam('aquarium'));
  }, [navigation]);

  const handleFishDecrement = () => {
    if (fishAmount > 0) {
      setFishAmount(fishAmount - 1);
    }
  };

  const handleFoodIncrement = () => {
    setFood(food + 1);
  };

  const handleFoodDecrement = () => {
    if (food > 0) {
      setFood(food - 1);
    }
  };

  const handleFishIncrement = () => {
    setFishAmount(fishAmount + 1);
  };

  const handleSubmit = async () => {
    console.tron.log('mandou?');

    const response = await api.put(
      `/aquarium-microservice/aquarium/${aquarium.name}`,
      {
        fictionalName,
        fish: fishSpecie,
        foodQuantity: food,
        foodInterval: 2,
        turnOnLight: lightOn,
        turnOffLight: lightOff,
      }
    );

    if (response.status === 200) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Falha no cadastro', 'Verifique os campos preenchidos!');
    }
  };

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="create"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome ficticio do aquário"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={fictionalName}
            onChangeText={setFictionalName}
          />
          <AmountView>
            <FormInput
              icon="create"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Espécie"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
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

          <AmountView>
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
          </AmountView>

          <TimeInput
            text="Horário de alimentação"
            time={feedTime}
            setTime={time => setFeedTime(time)}
          />

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

          <SubmitButton onPress={handleSubmit}>Cadastrar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

CustomizeAquarium.navigationOptions = ({ navigation }) => ({
  title: 'Cadastro do aquário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
