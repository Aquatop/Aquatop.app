import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/CleanLogo.png';
import text from '~/assets/AquatopText.png';

import { Container, HeaderGroup } from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderGroup>
        <Image source={logo} style={{ height: 55, width: 55 }} />
        <Image
          source={text}
          style={{ height: 40, width: 240, resizeMode: 'contain' }}
        />
      </HeaderGroup>
      <TouchableOpacity onPress={() => console.log('notificação')}>
        <Icon name="notifications" size={40} />
      </TouchableOpacity>
    </Container>
  );
}
