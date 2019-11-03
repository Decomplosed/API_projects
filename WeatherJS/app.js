const weather = new Weather('Boston', 'US')

weather.GetWeather()
.then(results => {
  console.log(results);
})
.catch(err => console.log(err);)