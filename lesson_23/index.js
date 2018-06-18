console.log("Привет, Мир!");
let inp = document.getElementById('inp1');
let btn = document.getElementById('btn');
let list = document.getElementById('ul');
let li = document.createElement('li');

let btn2 = document.getElementById('btn2');


btn.addEventListener ('click', function () {
    let btnrem = document.createElement('button');
    let li = document.createElement('li');

    for (let x = 0; x < li.length; x += 1) {

    }
    list.appendChild(li);
    li.innerHTML = inp.value;
    btnrem.setAttribute('id', 'btnrem');
    li.appendChild(btnrem);
    
});


        btnrem.addEventListener ('click', function () {
            list.removeChild(li);
         });  

        //  btn2.addEventListener ('click', function () {
        //     list.parentNode.removeChild(li);;
        //  });
