import styled from 'styled-components/native';

// functions
export const Container = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.22);
  border-radius: 10;
  height: 20;
  width: 100%;
  margin-top: 10px;
`;

export const Filled = styled.View`
  display: flex;
  background-color: #65aeca;
  border-radius: 10;
  height: 20;
  width: ${props => props.waterLevel}%;
`;
