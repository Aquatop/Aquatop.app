import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import CodeInput from 'react-native-confirmation-code-field';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, SubmitButton } from './styles';

export default function InsertPin({ navigation, aquarium }) {
  const [pin, setPin] = useState('');

  const handlerOnFulfill = useCallback(code => setPin(code), []);

  const handleSubmit = () => {
    if (pin === '1234') {
      navigation.navigate('CustomizeAquarium', { aquarium });
    } else {
      Alert.alert(
        'Pin incorreto',
        'O pin inserido não corresponde ao mostrado no display do aquario!'
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
