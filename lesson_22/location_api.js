export default class LocationApi {
  getMyIp() {
    return fetch('https://api.ipify.org?format=json', {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
          
        }

        return Promise.reject(res.status);
      });
  }

  getMyLocation(ip) {
    return fetch(`https://freegeoip.net/json/${ip}`, {
      method: 'GET',
     
    })
    
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }

        return Promise.reject(res.status);
      });
  }
}

