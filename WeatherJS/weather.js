class Weather {
  constructor(city, country) {
    this.apiKey = '36d48b3ce16f1c6393d0161e2bed9a8c'
    this.city = city
    this.country = country
  }

  async GetWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`)
    const responseData = await response.json()

    return responseData
  }

  changeLocation(city, country) {
    this.city = city
    this.country = country
  }
}