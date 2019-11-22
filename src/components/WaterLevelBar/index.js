import React from 'react';
import { Container, Filled } from './styles';

const WaterLevelBar = props => (
  <Container {...props}>
    <Filled {...props} />
  </Container>
);

export default WaterLevelBar;
