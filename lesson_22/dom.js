export default class Dom {
  constructor() {
    this.preloader = document.getElementById('preloader');
    this.location = document.getElementById('location');
    this.city = document.getElementById('city');
  }

  showPreloader() {
    this.preloader.style.opacity = 1;
    this.location.style.opacity = 0;
  }

  hidePreloader() {
    this.preloader.style.opacity = 0;
    this.location.style.opacity = 1;
  }

  setCoordinates(coordinates) {
    // this.location.innerHTML = coordinates;
    city.innerHTML = coordinates.city;
    // this.city.innerHTML = res.city;

  }

}