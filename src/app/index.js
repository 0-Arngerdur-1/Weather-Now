import './index.css';
import Weather from './Weather';
import UI from './UI';

const weather = new Weather('London', 'uk');
const ui = new UI();

async function fetchWeather() {
  const weatherResponse = await weather.getWeather();
  const weatherData = await weatherResponse.json();
  console.log(weatherData);
  ui.render(weatherData);
}

document.querySelector('#submit-button').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const countryCode = document.querySelector('#country-code').value;
  console.log(city, countryCode);
  e.preventDefault();
  weather.changeLocation(city, countryCode);
  fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);
