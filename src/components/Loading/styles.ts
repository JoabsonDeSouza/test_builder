import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  z-index: 1;
  background-color: #d1d9dd;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'orange',
})`
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
