import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, TimePicker } from './styles';

export default function TimeInput({ text, time, setTime }) {
  return (
    <Container>
      <Text>{text}</Text>
      <TimePicker
        style={{ width: 100 }}
        mode="time"
        placeholder="00:00"
        date={time}
        onDateChange={setTime}
        showIcon={false}
        customStyles={{
          dateText: {
            height: 46,
            color: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 4,
            marginTop: 23,
            alignItems: 'center',
          },
          dateInput: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
        }}
      />
    </Container>
  );
}

TimeInput.propTypes = {
  text: PropTypes.string,
  time: PropTypes.string,
  setTime: PropTypes.func,
};

TimeInput.defaultProps = {
  text: '',
  time: '',
  setTime: null,
};
