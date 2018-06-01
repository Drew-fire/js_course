const moment = require('moment');
const inp = document.getElementById('dateinp');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {


    let now = moment(new Date());
    let end_date =  moment(inp.value);
    let text_span = document.getElementById('text_span');
    let result_span = document.getElementById('result_span');
    let ending_span = document.getElementById('ending_span');
    let ending = "дней";
    let text = "Осталось:";
    
    
    result = end_date.diff(now, 'days');
    
    
    if ((result % 10) == 1 || (result % 10) == (-1)) {
        ending = "день";
    }
    
    if ((result % 10) >= 2 && (result % 10) <= 4) {
        ending = "дня";
    }

    if ((result % 10) <= (-2) && (result % 10) >= (-4)) {
        ending = "дня";
    }

    
    if ((result % 100) >= 5 && (result % 100) <= 14) {
        ending = "дней";
    }

    if ((result % 100) <= (-5) && (result % 100) >= (-14)) {
        ending = "дней";
    }
    
    if (result < 0) {
        text = 'Прошло:';
        result = (result * (-1));
    }

    text_span.innerHTML = text;
    result_span.innerHTML = result;
    ending_span.innerHTML = ending;
    
});