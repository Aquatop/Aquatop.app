import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 55px;
  padding: 0 0;
  /* justify-content: center;
  align-items: center; */
`;

export const NotificationList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  padding: 0px 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-top-color: solid rgba(0, 0, 0, 0.3);
  border-top-width: 2px;
`;

export const NotificationItem = styled.View`
  padding: 10px 10px;
  border-bottom-color: solid rgba(0, 0, 0, 0.3);
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;

export const Description = styled.Text`
  color: #fff;
`;
