import LocationApi from './location_api';
import Dom from './dom';
import WeatherApi from './weather_api';


const locationApi = new LocationApi();
const dom = new Dom();
const weather = new WeatherApi();
const btn2 = document.getElementById('btn2');

dom.showPreloader();
locationApi.getMyIp()
  .then((res) => {
    return locationApi.getMyLocation(res.ip)
  })
  .then((res) => {
    dom.hidePreloader();
    dom.setCoordinates(res);
  })
  .catch((eror) => {
    console.log(eror);
  });

    weather.getMyWeather()
    .then((res) => {
      return weather.setWeather(res);

    })
    .catch((eror) => {
      console.log(eror);
    });

    // btn2.addEventListener('click', () => {

    // });