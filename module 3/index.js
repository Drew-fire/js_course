import UIController from './ui_controller';
import CardData from './card_data';

const uiController = new UIController();
const cardData = new CardData();

const button = document.getElementById('btn');

button.addEventListener('click', () => {
    button.setAttribute('disabled', 'true');
    cardData.showPreloader();
    uiController.getBtn()
        .then(res => {
            cardData.setTable(res);
            cardData.hidePreloader();
            button.removeAttribute('disabled');
        })
        .catch(rej => {
            cardData.hidePreloader();
            button.removeAttribute('disabled');
            alert(rej);
        })
})