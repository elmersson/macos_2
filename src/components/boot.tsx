'use client';
import { WeatherData } from '@/types/Weather';
import { useEffect, useState } from 'react';
import { IoLogoApple } from 'react-icons/io5';
import axios from 'axios';
import useTime from '@/hooks/useTime';
import getFullFormatDate from '@/lib/date/getFullFormatDate';
import { useSystemStore } from './providers/store-provider';

export function Boot() {
  const [latitude, setLatitude] = useState<number>(59.3326);
  const [longitude, setLongitude] = useState<number>(18.0649);
  const {
    booted,
    setBooted,
    setWeather,
    setNameOfTheDay,
    bootProgress,
    setBootProgress
  } = useSystemStore((state) => state);

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
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER;
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const weatherData: WeatherData = response.data;
        setWeather(weatherData);
      } catch (err) {
        console.error(err);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setLatitude(latitude);
          setLongitude(longitude);
          fetchWeatherData();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      fetchWeatherData();
    }
  }, [latitude, longitude, setWeather]);

  const currentTime = useTime();
  const forrmatedTime = getFullFormatDate(currentTime);

  const currentDate =
    currentTime.getFullYear() +
    '/' +
    (currentTime.getMonth() + 1) +
    '/' +
    forrmatedTime.dayOfMonth;

  const apiUrl = `http://sholiday.faboul.se/dagar/v2.1/${currentDate}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        if (
          response.data &&
          response.data.dagar &&
          response.data.dagar.length > 0
        ) {
          const namesForToday = response.data.dagar[0].namnsdag;
          setNameOfTheDay(namesForToday);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl, setNameOfTheDay]);

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
