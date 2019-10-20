import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'



import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 50px;
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
  margin-top: 5px;
`;

export const AmountButton = styled(RectButton)`
  border: 0;
  border-radius: 50;
  padding: 0 15px;
  font-weight: bold;
  height: 46px;
  align-items: center;
  justify-content: center;
 `
 export const AmountView = styled.View`
  flex-direction: row;
 `

 export const AmountText = styled.Text`
  font-size: 15px;
  color: #fff;
  height: 46px;
  align-items: center;
  align-content: center;
  padding-top: 9px;
  font-size: 20;
 `

 export const TimePicker = styled(DatePicker)`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
 `