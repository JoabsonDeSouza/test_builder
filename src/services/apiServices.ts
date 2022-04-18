import api from './BaseApi';

const apiKey = 'b5b562ffaa3f559da2d96661499d9c5f';

export const getUserLocationByCoordinatesService = async (
  latitude: number,
  longitude: number,
  limit = 2,
) => {
  try {
    const result = await api.get(
      `geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}&limit=${limit}`,
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getWeatherByCoordinatesService = async (
  latitude: number,
  longitude: number,
) => {
  try {
    const result = await api.get(
      `data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br`,
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getUrlIcon = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
