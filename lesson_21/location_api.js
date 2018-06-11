export default class LocationApi {
    getMyIp() {
        return fetch('https://api.ipify.org?format=json')
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                } 
                
                else {
                    return Promise.reject(res.status);
                }
            })
            .catch(rej => console.log('ERROR', rej));
    };
    
    getMyLocation(myIp) {
        return fetch(`https://freegeoip.net/json/${myIp}`)
            .then (res => {
                if (res.status === 200) {
                    return res.json();
                } 
                
                else {
                    return Promise.reject(res.status);
                }
            })
            .catch(rej => console.log('ERROR', rej));
    }
};
