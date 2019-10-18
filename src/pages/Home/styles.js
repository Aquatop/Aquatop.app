import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCenter = styled.View`
  background: #f8f7f7;
  justify-content: center;
  flex: 1;
`;

export const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  opacity: 0.1;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 30px;
  opacity: 0.1;
  color: black;
  line-height: 35px;
  text-align: center;
  font-weight: bold;
`;

export const IconView = styled(RectButton)`
  height: 55;
  width: 55;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-left: 80%;
  border-radius: 50;
  border: 3px solid black;
`;

export const ButtonView = styled.View`
  position: absolute;
  bottom: 15px;
  right: 3px;
`;
