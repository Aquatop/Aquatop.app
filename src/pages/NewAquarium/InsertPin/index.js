import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';

import CodeInput from 'react-native-confirmation-code-field';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import api from '~/services/api';

import { Container, SubmitButton } from './styles';

export default function InsertPin({ navigation }) {
  const [pin, setPin] = useState('');
  const [aquarium, setAquarium] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setAquarium(navigation.getParam('aquarium'));
    api.get(`aquarium-microservice/pin/${aquarium.name}`);
  }, [aquarium, navigation]);

  const handlerOnFulfill = useCallback(code => setPin(code), []);

  const handleSubmit = async () => {
    const response = await api.post(
      `aquarium-microservice/pin/${aquarium.name}`,
      { pin }
    );

    if (response.data.authorized) {
      navigation.navigate('CustomizeAquarium', { aquarium });
    } else {
      dispatch(
        ToastActionsCreators.displayError(
          'Pin incorreto! O pin inserido não corresponde ao mostrado no display do aquario',
          5000
        )
      );
    }
  };

  return (
    <Background>
      <Container>
        <CodeInput
          autoFocus
          space={16}
          size={45}
          codeLength={4}
          variant="border-b"
          onFulfill={handlerOnFulfill}
        />
        <SubmitButton onPress={handleSubmit}>Verificar</SubmitButton>
      </Container>
    </Background>
  );
}

InsertPin.navigationOptions = ({ navigation }) => ({
  title: 'Insira o PIN',
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
