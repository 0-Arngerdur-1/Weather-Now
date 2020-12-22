import './index.css';
import Weather from './Weather';
import UI from './UI';
import Store from './Store';

const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
  const weatherResponse = await weather.getWeather();
  const weatherData = await weatherResponse.json();
  ui.render(weatherData);
}

document.querySelector('#submit-button').addEventListener('click', (e) => {
  const cityValue = document.querySelector('#city').value;
  const countryCodeValue = document.querySelector('#country-code').value;
  e.preventDefault();
  weather.changeLocation(cityValue, countryCodeValue);
  store.setLocationData(cityValue, countryCodeValue);
  fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);
