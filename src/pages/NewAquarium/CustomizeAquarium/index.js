import React, { useState } from 'react';
import { TouchableOpacity, Alert, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container,
         Form, 
         FormInput, 
         SubmitButton, 
         AmountButton, 
         AmountView,
         AmountText,
         TimePicker, } from './styles';

export default function CustomizeAquarium({ navigation, aquarium }) {
  const [fictionalName, setFictionalName] = useState('');
  const [FishSpecie, setFishSpecie] = useState('');
  const [FishAmount, setFishAmount] = useState(0);
  const [FeedTime, setFeedTime] = useState('00:00');

  const handleDecrement = () => {
    if (FishAmount > 0) {
      setFishAmount(FishAmount - 1)
    }
  } 

  const handleIncrement = () => {
    setFishAmount(FishAmount + 1)
  }


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
              <Icon name = "remove-circle" size={30} color="white" />
            </AmountButton>
            <AmountText>
              {FishAmount}
            </AmountText>
            <AmountButton onPress={handleIncrement}>
              <Icon name = "add-circle" size={30} color="white" />
            </AmountButton>
          </AmountView>

          <AmountView>
            <AmountText>Horário de alimentação:</AmountText>
            <TimePicker 
              mode="time" 
              placeholder="00:00"
              date = {FeedTime}
              onDateChange = {time => setFeedTime(time)}
              customStyles = {{
                dateText:{
                  height: 46,
                  color: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: 4,
                  marginTop: 18,
                  alignItems: 'center',
                  fontSize: 20,
                },
                dateInput:{
                  height: 46,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                },
              }}
            />
          </AmountView>
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
