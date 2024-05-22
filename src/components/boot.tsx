'use client';
import { useEffect, useState } from 'react';
import { IoLogoApple } from 'react-icons/io5';
import { useSystemStore } from './providers/store-provider';
import useWeatherData from '@/hooks/useWeatherData';
import useNameOfTheDay from '@/hooks/useNameOfTheDay';

export function Boot() {
  const [latitude, setLatitude] = useState<number>(59.3326);
  const [longitude, setLongitude] = useState<number>(18.0649);
  const [isGeolocationLoaded, setIsGeolocationLoaded] = useState(false);

  const {
    booted,
    setBooted,
    setWeather,
    setNameOfTheDay,
    bootProgress,
    setBootProgress
  } = useSystemStore((state) => state);

  const { data: weatherData } = useWeatherData(
    latitude,
    longitude,
    isGeolocationLoaded
  );
  const { data: nameOfTheDay } = useNameOfTheDay();

  useEffect(() => {
    if (weatherData) {
      setWeather(weatherData);
    }
  }, [weatherData, setWeather]);

  useEffect(() => {
    if (nameOfTheDay) {
      setNameOfTheDay(nameOfTheDay);
    }
  }, [nameOfTheDay, setNameOfTheDay]);

  useEffect(() => {
    if (bootProgress < 100) {
      const interval = setInterval(() => {
        setBootProgress((bootProgress + 1) % 101);
      }, 50);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setBooted(true);
      }, 1000);
    }
  }, [bootProgress, setBooted, setBootProgress]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setIsGeolocationLoaded(true);
        },
        (error) => {
          console.error('Geolocation error:', error.message);
          setIsGeolocationLoaded(true);
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
      setIsGeolocationLoaded(true);
    }
  }, []);

  if (booted) {
    return;
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black justify-center z-[999999] fixed top-0 left-0">
      <IoLogoApple className="text-white size-[130px]" />
      <div className="h-1.5 w-64 rounded-full bg-neutral-700/80 border border-neutral-100/20 mt-[5%]">
        <div
          className="h-1 rounded-full bg-white border"
          style={{ width: `${bootProgress}%`, transition: 'width 0.5s ease' }}
          role="progressbar"
        ></div>
      </div>
    </div>
  );
}
