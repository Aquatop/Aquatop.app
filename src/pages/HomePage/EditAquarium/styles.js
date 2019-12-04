import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 45px;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
`;

export const AmountButton = styled(RectButton)`
  border: 0;
  border-radius: 50;
  font-weight: bold;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
`;
export const AmountView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const AmountText = styled.Text`
  font-size: 18px;
  color: #fff;
  height: 46px;
  align-items: center;
  align-content: center;
  padding-top: 9px;
`;

export const TimePicker = styled(DatePicker)`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

export const QuantityView = styled.View`
  width: 100;
  flex-direction: row;
  justify-content: space-between;
`;
