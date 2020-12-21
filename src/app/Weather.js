/* This archive contain a class who is responsible for getting the weather
  information and changing the location */

export default class Weather {
  constructor(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
    this.apiKey = '01b51a63c67b57946a6c521594ddcf51';
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const data = await fetch(URI);
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
