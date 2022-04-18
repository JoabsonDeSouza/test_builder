import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #d1d9dd;
`;

interface TextProps {
  bold?: boolean;
  size?: number;
}

export const Text = styled.Text`
  font-size: ${({ size }: TextProps) => (size ? size : 16)}px;
  font-weight: ${({ bold }: TextProps) => (bold ? 'bold' : 'normal')};
`;

export const TextHour = styled.Text`
  font-size: ${({ size }: TextProps) => (size ? size : 16)}px;
  font-weight: ${({ bold }: TextProps) => (bold ? 'bold' : 'normal')};
  margin-bottom: 40px;
  width: 70%;
  text-align: center;
`;

export const Image = styled.Image`
  height: 120px;
  width: 120px;
`;

export const Header = styled.SafeAreaView`
  position: absolute;
  top: 10%;
  width: ${width}px;
`;

export const ContainerHeader = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const ContainerTemps = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin-top: 20px;
`;

export const TextAndTemp = styled.View`
  align-items: center;
`;

export const ContainerWeatherIcon = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const ContainerButton = styled.SafeAreaView`
  position: absolute;
  bottom: 10%;
  width: 70%;
  align-items: center;
  justify-content: center;
`;
