import React, { useMemo } from 'react';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { useApp } from '../../context/app';
import { getUrlIcon } from '../../services/apiServices';
import { capitalize, convertTemperature } from '../../util/functions';
import getCurrentDate from '../../util/getCurrentDate';

import * as S from './styles';

const Home: React.FC = () => {
  const { callAllFunctions, currentWeather, myLocation, loading } = useApp();

  const weatherIsValid = useMemo(() => {
    return currentWeather && currentWeather.weather[0];
  }, [currentWeather]);

  const iconApi = useMemo(() => {
    if (!weatherIsValid) {
      return '';
    }
    return getUrlIcon(currentWeather?.weather[0].icon || '');
  }, [currentWeather?.weather, weatherIsValid]);

  return (
    <>
      <S.Container>
        <S.Header>
          <S.ContainerHeader>
            {!!myLocation.name && (
              <S.Text bold size={18}>
                {myLocation.name}
              </S.Text>
            )}
            {!!myLocation.state && <S.Text>{myLocation.state}</S.Text>}
          </S.ContainerHeader>
        </S.Header>

        <S.TextHour>{getCurrentDate()}</S.TextHour>

        {!!currentWeather?.main.temp && (
          <S.ContainerTexts>
            <S.Text size={45} bold>
              {convertTemperature(currentWeather?.main.temp) + '°'}
            </S.Text>
            <S.Text size={25}>C</S.Text>
          </S.ContainerTexts>
        )}
        <S.ContainerTemps>
          {!!currentWeather?.main.temp && (
            <S.TextAndTemp>
              <S.Text>Min.</S.Text>
              <S.ContainerTexts>
                <S.Text size={20} bold>
                  {convertTemperature(currentWeather?.main?.temp_min)}
                </S.Text>
                <S.Text>° C</S.Text>
              </S.ContainerTexts>
            </S.TextAndTemp>
          )}

          {!!currentWeather?.main.temp && (
            <S.TextAndTemp>
              <S.Text>Máx.</S.Text>
              <S.ContainerTexts>
                <S.Text size={20} bold>
                  {convertTemperature(currentWeather?.main?.temp_min)}
                </S.Text>
                <S.Text>° C</S.Text>
              </S.ContainerTexts>
            </S.TextAndTemp>
          )}
        </S.ContainerTemps>
        <S.ContainerWeatherIcon>
          {!!iconApi && <S.Image source={{ uri: iconApi }} />}
          {weatherIsValid && (
            <S.Text>
              {capitalize(currentWeather?.weather[0]?.description || '')}
            </S.Text>
          )}
        </S.ContainerWeatherIcon>
        <S.ContainerButton>
          <Button text="Atualizar Clima" onPress={callAllFunctions} />
        </S.ContainerButton>
      </S.Container>
      {loading && <Loading message="Carregando dados, favor aguarde..." />}
    </>
  );
};

export default Home;
