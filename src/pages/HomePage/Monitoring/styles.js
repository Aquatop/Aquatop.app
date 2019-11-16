import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 50px;
  padding: 0 20px;
  /* justify-content: center;
  align-items: center; */
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Temperature = styled.View`
  background: #fff;
  border-radius: 12px;
  flex: 1;
  padding: 10px;
  align-items: center;
  margin: 20px 10px 10px 0;
  opacity: 0.9;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 35px;
`;

export const Ph = styled.View`
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  flex: 1;
  align-items: center;
  margin: 20px 0 10px 10px;
  opacity: 0.9;
`;

export const WaterLevel = styled(LinearGradient).attrs({
  colors: ['#fff', '#120a8f'],
})`
  border-radius: 12px;
  padding: 10px;
  flex: 1;
  align-items: center;
  margin: 10px 0 20px 0;
  opacity: 0.9;
  max-height: 250px;
  border: 1px;
  border-color: #fff;
`;

export const EditButton = styled(Button)`
  margin-bottom: 40px;
`;

export const IconNotification = styled(Icon).attrs({
  name: 'notifications',
  size: 35,
})`
  margin-right: 10px;
  color: #fff;
`;
