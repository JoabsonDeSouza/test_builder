import React from 'react';

import * as S from './styles';

interface ButtonProps {
  text?: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
