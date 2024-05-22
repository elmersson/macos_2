import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WeatherData } from '@/types/Weather';

const fetchWeatherData = async (latitude: number, longitude: number) => {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER;
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  );
  return response.data as WeatherData;
};

const useWeatherData = (
  latitude: number | null,
  longitude: number | null,
  isGeolocationLoaded: boolean
) => {
  return useQuery({
    queryKey: ['weatherData', latitude, longitude],
    queryFn: () => fetchWeatherData(latitude!, longitude!),
    enabled: isGeolocationLoaded && latitude !== null && longitude !== null
  });
};

export default useWeatherData;
