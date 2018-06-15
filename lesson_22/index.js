import LocationApi from './location_api';
import Dom from './dom';
import WeatherApi from './weather_api';


const locationApi = new LocationApi();
const dom = new Dom();
const weather = new WeatherApi();
const btn2 = document.getElementById('btn2');
const bycity = document.getElementById('bycity');




btn2.addEventListener('click', () => {
  dom.showPreloader();
  locationApi.getMyIp()
    .then((res) => {
      return locationApi.getMyLocation(res.ip)
    })
    .then((res) => {
      dom.setCoordinates(res);
      return weather.getMyWeather(res.city);
    })
    .then((res) => {
      weather.setWeather(res);
      dom.hidePreloader();
    })
  
    .catch((eror) => {
      dom.hidePreloader()
      console.log(eror);
    });
});

bycity.addEventListener('click', () => {
  const city = document.getElementById('city');
      if (city.value) {
        dom.showPreloader();
        weather.getMyWeather(city.value)
        .then(res => {
          weather.setWeather(res)
          dom.hidePreloader()
          
        })
        .catch((eror) => {
          dom.hidePreloader()
          console.log(eror);
        });
      }
});