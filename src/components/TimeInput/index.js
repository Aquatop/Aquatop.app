import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, TimePicker } from './styles';

export default function TimeInput({ text, feedTime, setFeedTime }) {
  return (
    <Container>
      <Text>{text}</Text>
      <TimePicker
        mode="time"
        placeholder="00:00"
        date={feedTime}
        onDateChange={setFeedTime}
        customStyles={{
          dateText: {
            height: 46,
            color: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 4,
            marginTop: 23,
            alignItems: 'center',
          },
          dateInput: {
            height: 46,
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
  feedTime: PropTypes.string,
  setFeedTime: PropTypes.func,
};

TimeInput.defaultProps = {
  text: '',
  feedTime: '',
  setFeedTime: null,
};
