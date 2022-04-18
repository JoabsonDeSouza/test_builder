import getPermission from './getPermission';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { Alert } from 'react-native';
import { UserLocation } from '../model/userLocation';

export default async function (): Promise<UserLocation> {
  const hasPermission = await getPermission();

  if (!hasPermission) {
    return {} as UserLocation;
  }

  return new Promise((res, rej) => {
    Geolocation.getCurrentPosition(
      (position: GeoPosition) => {
        const currentLocation: UserLocation = {
          ...position.coords,
        };
        res(currentLocation);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        rej(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
      },
    );
  });
}
