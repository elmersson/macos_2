import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import { getHours } from 'date-fns';
import { useSystemStore } from '@/components/providers/store-provider';

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getBackgroundColor = (weatherDescription: string) => {
  switch (weatherDescription) {
    case 'Clear':
      return 'bg-blue-400';
    case 'Clouds':
      return 'bg-gray-400';
    case 'Rain':
    case 'Drizzle':
      return 'bg-blue-600';
    case 'Thunderstorm':
      return 'bg-purple-700';
    case 'Snow':
      return 'bg-blue-100';
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return 'bg-gray-300';
    default:
      return 'bg-blue-300';
  }
};
export function Weather() {
  const { weather } = useSystemStore((state) => state);
  const weatherSlice = weather.list.slice(0, 6);
  const bgColor = getBackgroundColor(weather.list[0].weather[0].description);

  return (
    <div className={`rounded-2xl pt-4 px-4 pb-2 shadow-2xl ${bgColor}`}>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row text-white items-center space-x-1 text-shadow-lg">
              <p className="font-semibold text-base text-white">
                {weather.city.name || 'Stockholm'}
              </p>
              <FaLocationArrow size="0.6em" />
            </div>
            <p className="text-4xl text-white mb-2 text-shadow-lg">
              {weather.list[0].main.temp.toFixed(0)}°
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
              alt="icon"
              width={25}
              height={25}
              style={{ marginLeft: 'auto' }}
            />
            <p className="text-sm mt-1 font-bold text-white text-right text-shadow">
              {capitalizeWords(weather.list[0].weather[0].description)}
            </p>
            <p className="text-xs text-white mb-1 text-shadow text-right font-bold">{`H:${weather.list[0].main.temp_max.toFixed(
              0
            )}° L:${weather.list[0].main.temp_min.toFixed(0)}°`}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-1">
          {weatherSlice.map((weatherItem) => (
            <div key={weatherItem.dt}>
              <div className="flex flex-col items-center space-y-1">
                <p className=" text-slate-100/80 text-xs">
                  {getHours(weatherItem.dt_txt)}
                </p>
                <Image
                  src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
                  alt="icon"
                  width={25}
                  height={25}
                />
                <p className="text-white text-xs font-bold text-shadow">
                  {weatherItem.main.temp.toFixed(0)}°
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
