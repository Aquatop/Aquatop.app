import styled from 'styled-components/native';
import DatePicker from 'react-native-datepicker';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  height: 46px;
  align-items: center;
  align-content: center;
  padding-top: 9px;
`;

export const TimePicker = styled(DatePicker)`
  align-self: flex-end;
`;
