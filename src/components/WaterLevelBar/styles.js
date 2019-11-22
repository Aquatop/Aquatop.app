import styled from 'styled-components/native';

// functions
export const Container = styled.View`
  display: flex;
  background-color: grey;
  height: 5;
  width: 100%;
`;

export const Filled = styled.View`
  display: flex;
  background-color: blue;
  height: 5;
  width: ${props => props.waterLevel}%;
`;
