import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';

import { Container } from './styles';

export default function Monitoring() {
  return (
    <Background>
      <Container>
        <Text>Monitoring</Text>
      </Container>
    </Background>
  );
}
