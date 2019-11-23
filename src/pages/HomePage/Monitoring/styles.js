import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  margin: 10px 0 10px 0;
`;

export const Temperature = styled.View`
  background: #fff;
  border-radius: 3px;
  flex: 1;
  padding: 10px;
  align-items: center;
  margin: 0 10px 0 0;
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
  border-radius: 3px;
  padding: 10px;
  flex: 1;
  align-items: center;
  margin: 0 0 0 10px;
  opacity: 0.9;
`;

export const WaterLevelContainer = styled.View`
  background: #fff;
  border-radius: 3px;
  /* flex: 1; */
  padding: 10px 15px 15px 15px;
  align-items: center;
  margin: 10px 0 10px 0;
  opacity: 0.9;
`;

export const EditButton = styled(Button)`
  margin: 10px 0 40px 0;
`;

export const IconNotification = styled(Icon).attrs({
  name: 'bell',
  size: 35,
})`
  margin-right: 10px;
  color: #fff;
`;

export const CommandButton = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  flex: 1;
  padding: 10px 0 10px 0;
  align-items: center;
  justify-content: center;
  /* margin: 0 10px 0 0; */
  /* opacity: 0.9; */
`;
