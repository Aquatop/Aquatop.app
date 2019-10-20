import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import TimeInput from '~/components/TimeInput';

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

export default function CustomizeAquarium({ navigation, aquarium }) {
  const [fictionalName, setFictionalName] = useState('');
  const [fishSpecie, setFishSpecie] = useState('');
  const [fishAmount, setFishAmount] = useState(0);
  const [feedTime, setFeedTime] = useState('');
  const [lightOn, setLightOn] = useState('');
  const [lightOff, setLightOff] = useState('');
  const [food, setFood] = useState(0);

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

  const handleSubmit = () => {
    if (fictionalName === 'a') {
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
