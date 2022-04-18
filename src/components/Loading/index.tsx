import React from 'react';

import * as S from './styles';

interface LoadingProps {
  message?: string;
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <S.Container>
      <S.Spinner />
      <S.Text>{message || 'Carregando...'}</S.Text>
    </S.Container>
  );
};

export default Loading;
