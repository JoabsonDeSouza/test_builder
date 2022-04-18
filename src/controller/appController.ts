import { LocationName } from '../model/locationByName';
import { Weather } from '../model/weather';
import {
  getUserLocationByCoordinatesService,
  getWeatherByCoordinatesService,
} from '../services/apiServices';

export const getUserLocationByCoordinates = async (
  latitude: number,
  longitude: number,
) => {
  try {
    const response = await getUserLocationByCoordinatesService(
      latitude,
      longitude,
    );
    const locationByName: LocationName[] = response;
    return locationByName;
  } catch (error) {
    throw error;
  }
};

export const getWeatherByCoordinates = async (
  latitude: number,
  longitude: number,
) => {
  try {
    const response = await getWeatherByCoordinatesService(latitude, longitude);
    const currentWeather: Weather = response;
    return currentWeather;
  } catch (error) {
    throw error;
  }
};
