export default class UI {
  constructor() {
    this.location = document.querySelector('#weather-location');
    this.information = document.querySelector('#weather-information');
    this.temp = document.querySelector('#weather-temp');
    this.feelsLike = document.querySelector('#weather-feels-like');
    this.humidity = document.querySelector('#weather-humidity');
    this.wind = document.querySelector('#weather-wind');
    this.pressure = document.querySelector('#weather-pressure');
    this.visibility = document.querySelector('#weather-visibility');
  }

  // Function for give the API data for each weather info field
  render(weatherData) {
    this.location.innerText = `${weatherData.name} / ${weatherData.sys.country}`;
    this.information.innerText = `${weatherData.weather[0].description}`;
    this.temp.innerText = `${weatherData.main.temp}°C`;
    this.feelsLike.innerText = `Feels like ${weatherData.main.feels_like}°C`;
    this.humidity.innerText = `Humidity: ${weatherData.main.humidity}%`;
    this.wind.innerText = `Wind speed: ${weatherData.wind.speed}m/s`;
    this.pressure.innerText = `Pressure: ${weatherData.main.pressure}hPa`;
    this.visibility.innerText = `Visibility: ${
      parseFloat(weatherData.visibility) / 1000
    }Km`;
  }
}
