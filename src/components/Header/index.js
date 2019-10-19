import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/CleanLogo.png';
// import text from '~/assets/AquatopText.png';

import {
  Container,
  Content,
  Nav,
  Line,
  HomeLink,
  HomeLinkText,
  Aside,
  ProfileLink,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      {/* <HeaderGroup>
        <Image source={logo} style={{ height: 55, width: 64 }} />
        <Image
          source={text}
          style={{ height: 40, width: 140, resizeMode: 'contain' }}
        />
      </HeaderGroup>
      <TouchableOpacity onPress={() => console.log('notificação')}>
        <Icon name="notifications" size={40} />
      </TouchableOpacity>
    </Container>
    <Container> */}

      <Content>
        <Nav>
          <Image source={logo} style={{ height: 50, width: 59 }} />
          {/* <Line /> */}
        </Nav>

        <HomeLink>
          <HomeLinkText>AQUATOP</HomeLinkText>
        </HomeLink>
        <Aside>
          {/* <Line /> */}
          <ProfileLink
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            <Icon name="account-circle" size={55} color="#999" />
          </ProfileLink>
        </Aside>
      </Content>
    </Container>
  );
}
