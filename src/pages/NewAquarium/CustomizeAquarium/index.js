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
} from './styles';

export default function CustomizeAquarium({ navigation, aquarium }) {
  const [fictionalName, setFictionalName] = useState('');
  const [FishSpecie, setFishSpecie] = useState('');
  const [FishAmount, setFishAmount] = useState(0);
  const [FeedTime, setFeedTime] = useState('');
  const [LightOn, setLightOn] = useState('');
  const [LightOff, setLightOff] = useState('');

  const handleDecrement = () => {
    if (FishAmount > 0) {
      setFishAmount(FishAmount - 1);
    }
  };

  const handleIncrement = () => {
    setFishAmount(FishAmount + 1);
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
              value={FishSpecie}
              onChangeText={setFishSpecie}
            />

            <AmountButton onPress={handleDecrement}>
              <Icon name="remove-circle" size={30} color="white" />
            </AmountButton>
            <AmountText>{FishAmount}</AmountText>
            <AmountButton onPress={handleIncrement}>
              <Icon name="add-circle" size={30} color="white" />
            </AmountButton>
          </AmountView>

          <TimeInput
            text="Horário de alimentação"
            time={FeedTime}
            setTime={time => setFeedTime(time)}
          />

          <TimeInput
            text="Horário de ligar a luz"
            time={LightOn}
            setTime={time => setLightOn(time)}
          />

          <TimeInput
            text="Horário de desligar a luz"
            time={LightOff}
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
