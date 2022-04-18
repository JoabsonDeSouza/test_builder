import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getUserLocationByCoordinates,
  getWeatherByCoordinates,
} from '../controller/appController';
import { LocationName } from '../model/locationByName';
import { UserLocation } from '../model/userLocation';
import { Weather } from '../model/weather';
import getLocation from '../util/getLocation';

interface AppContextData {
  myLocation: LocationName;
  currentWeather: Weather | undefined;
  callAllFunctions: () => void;
  loading: boolean;
}

const AppContext = createContext({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [myLocation, setMyLocation] = useState<LocationName>(
    {} as LocationName,
  );
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [loading, setLoading] = useState<boolean>(false);

  const getUserLocation = useCallback(async () => {
    try {
      const location: UserLocation = await getLocation();
      return location;
    } catch (error) {
      console.warn(error);
      return {} as UserLocation;
    }
  }, []);

  const getLocationByCoordinates = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const userLocationByCoords = await getUserLocationByCoordinates(
          latitude,
          longitude,
        );
        return userLocationByCoords;
      } catch (error) {
        console.warn(error);
        return [];
      }
    },
    [],
  );

  const getWeather = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const weatherByCoords = await getWeatherByCoordinates(
          latitude,
          longitude,
        );
        return weatherByCoords;
      } catch (error) {
        console.warn(error);
        return {} as Weather;
      }
    },
    [],
  );

  const callAllFunctions = useCallback(async () => {
    setLoading(true);

    try {
      const location = await getUserLocation();

      const userLocationByCoords = await getLocationByCoordinates(
        location.latitude,
        location.longitude,
      );

      if (userLocationByCoords.length !== 0) {
        setMyLocation(userLocationByCoords[0]);
      }

      const weatherByCoords = await getWeather(
        location.latitude,
        location.longitude,
      );

      setCurrentWeather(weatherByCoords);

      setLoading(false);
    } catch (error) {
      console.warn(error);
      setLoading(false);
    }
  }, [getLocationByCoordinates, getUserLocation, getWeather]);

  useEffect(() => {
    callAllFunctions();
  }, [callAllFunctions]);

  return (
    <AppContext.Provider
      value={{
        myLocation,
        currentWeather,
        callAllFunctions,
        loading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside AppContext');
  }

  return context;
}

export { AppProvider, useApp };
