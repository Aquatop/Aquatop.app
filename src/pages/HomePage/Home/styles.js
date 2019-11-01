import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  opacity: 0.2;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 30px;
  opacity: 0.2;
  color: black;
  line-height: 35px;
  text-align: center;
  font-weight: bold;
`;

export const AquariumList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 35px;
  padding: 0 20px;
`;

export const Aquarium = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
