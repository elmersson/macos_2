import { http, HttpResponse } from 'msw';
import WeatherData from '../src/data/Weather.json';

export const handlers = [
  http.get('http://api.openweathermap.org/data/2.5/*', () => {
    return HttpResponse.json(WeatherData);
  }),
  http.get('http://sholiday.faboul.se/dagar/v2.1/*', () => {
    return HttpResponse.json({
      cachetid: '2024-04-16 06:28:47',
      version: '2.1',
      uri: '/dagar/v2.1/2015/01/06',
      startdatum: '2015-01-06',
      slutdatum: '2015-01-06',
      dagar: [
        {
          datum: '2015-01-06',
          veckodag: 'Tisdag',
          'arbetsfri dag': 'Ja',
          'röd dag': 'Ja',
          vecka: '02',
          'dag i vecka': '2',
          helgdag: 'Trettondedag jul',
          namnsdag: ['Kasper', 'Melker', 'Baltsar'],
          flaggdag: ''
        }
      ]
    });
  })
];
