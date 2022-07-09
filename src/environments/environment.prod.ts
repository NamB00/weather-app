// export const environment = {
//   production: true
// };
import { environment as common } from './environment';

export const environment = {
  production: true,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidAPIHostLabel: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',

  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'cca929f7cdmshd1be5a472559672p14237fjsn5c767b978ab9',
};
