import MaskInput from 'mask-input';

export default class UIController {
    constructor () {
        this.addInput();
        this.addNameInp();
        this.addButton();
    }
    
    
    addInput() {
        this.inpCard = document.getElementById('inp1');
        
        this.maskInput = new MaskInput(this.inpCard, {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            maskChar: '_',
            onChange: this.validationCard.bind(this),
          });
    }


    validationCard() {
        this.regExp = /^\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}$/;
        if (!this.regExp.test(this.inpCard.value)) {
            this.inpCard.style.border = '2px solid rgba(255, 0, 0, 0.4)';
            this.inpCard.style.background = 'rgba(255, 0, 0, 0.05)';
            this.buleanCard = false;
        } else {
            this.inpCard.style.border = '2px solid lightgreen';
            this.inpCard.style.background = 'rgba(125, 191, 95, 0.1)';
            this.buleanCard = true;
        }
    }

    addNameInp() {
        this.inpName = document.getElementById('name');
        this.inpName.onchange = this.nameValidation.bind(this);
    }

    nameValidation() {
        this.regExp = /[A-z, А-я]{2,}/;
        if (!this.regExp.test(this.inpName.value)) {
             this.inpName.style.border = '2px solid rgba(255, 0, 0, 0.4)';
            this.inpName.style.background = 'rgba(255, 0, 0, 0.05)';
            this.buleanName = false;
        } else {
            this.inpName.style.border = '2px solid lightgreen';
            this.inpName.style.background = 'rgba(125, 191, 95, 0.1)';
            this.buleanName = true;
        }

    }

    addButton() {
            this.button = document.getElementById('btn');
            this.button.style.border = '2px solid rgba(255, 0, 0, 0.4)';
            this.button.style.background = 'rgba(255, 0, 0, 0.2)';
            window.addEventListener('change', this.buttonValidate.bind(this));
    }

    buttonValidate() {
        if(this.buleanCard && this.buleanName) {
            this.button.style.border = '2px solid lightgreen';
            this.button.style.background = 'rgba(125, 191, 95, 0.1)';
            this.button.removeAttribute('disabled');
        } else {
            this.button.style.border = '2px solid rgba(255, 0, 0, 0.4)';
            this.button.style.background = 'rgba(255, 0, 0, 0.05)';
            this.button.setAttribute('disabled', 'true');
        }
    }
    
    getBtn () {
            let regExp = /\-/g;
                   if (this.inpCard.value !== this.cardValue) {
                    this.cardValue = this.inpCard.value.replace(regExp, '');
                    // console.log(this.cardValue);
            return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${this.cardValue}`)
                .then(res => {
                    if(res.status === 200) {
                        return res.json();
                    } else {
                        return Promise.reject(res.status);
                    }
                })
        }
    }
}