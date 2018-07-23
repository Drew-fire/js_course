
export default class CardData {
    constructor();

    getButton(cardValue) {
        
        let regExp = /\-/g;
        if (this.inpCard.value !== this.cardValue) {
            this.cardValue = this.inpCard.value.replace(regExp, '');
            return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${this.cardValue}`)
                .then(res => {
                    if(res.status === 200) {
                        return res.json();
                    } else {
                        return Promise.reject(res.status);
                    }
                })
                .then((result) => {
            this.cardValue = this.inpCard.value.replace(regExp, '');
                    localStorage.setItem(cardValue, JSON.stringify(result));
            
                    return result;
            });
        }
    }  

}