export default class WeatherApi {
    constructor() {
        this.api = 'd6c8367bf64b6e1c5dc9fa151ad10528';
        this.сity_name = "Poltava";
        this.temp = document.getElementById('temp');
    }

    getMyWeather() {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.сity_name}&appid=${this.api}`)
      
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
  
          return Promise.reject(res.status);

        });
      }
        setWeather(setTemp) {
          this.temp.innerHTML = Math.round(Math.abs(setTemp.main.temp - 273.15)) + ' &#8451;';;
        }
    }