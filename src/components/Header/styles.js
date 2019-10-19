import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 0 10px;
`;

export const Content = styled.View`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Line = styled.View`
  background: #eee;
  height: 50px;
  width: 1px;
  margin: 5px;
`;

export const HomeLink = styled.TouchableOpacity``;

export const HomeLinkText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #7159c1;
`;

export const Aside = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ProfileLink = styled.TouchableOpacity``;
