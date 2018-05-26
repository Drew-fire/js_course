const n = 10;
const pause = document.getElementById('pause');
const numbers = document.getElementById('numbers');
const start = document.getElementById('start');
const second = document.getElementById('second');
const stop = document.getElementById('stop');
const sec = document.getElementById('sec');



let num = 0; 
let countClick = false;
let counter = 0;
let speed = 1000;
let interval;



for (x = 1; x <= n; x += 1) {

		let span = document.createElement('span');

		span.setAttribute('id', `id_span${x}`);

		span.appendChild(document.createTextNode(x));

		numbers.insertBefore(span, numbers.children[x]);

		if(x < n) {

		numbers.insertBefore(document.createTextNode(', '), numbers.children[x + 1])
		
		}
}

	sec.innerHTML = 's';



	second.appendChild(document.createTextNode(num));

	function count() {

	interval = setInterval(function(){

		num += 1;

		second.innerHTML = num;

		if (num === 1) {

			sec.innerHTML = '';

		} else {

			sec.innerHTML = 's';
		}

// =========================================__numb_background__================================

		if (counter < n) {
			counter += 1;
			document.getElementById(`id_span${counter}`).style.backgroundColor = 'coral';

		} else if (counter === n) {
			counter += n + 1;
			document.getElementById(`id_span${counter - n - 1}`).style.backgroundColor = 'green';
			counter -= 1;

		} else if (counter > n + 1) {
			counter -= 1;
			document.getElementById(`id_span${counter - n}`).style.backgroundColor = 'green';

		} else if (counter === n + 1) {
			counter = 0;
			document.getElementById(`id_span${counter + 1}`).style.backgroundColor = 'coral';
			counter += 1;
		}


		start.setAttribute('disabled', 'true');
		countClick = false;
	}, speed);



	pause.addEventListener('click', function(){

		clearInterval(interval);

		start.removeAttribute('disabled');

		countClick = true;
	})


	stop.addEventListener('click', function(){

		clearInterval(interval);

		second.innerHTML = 0;

		num = 0;
		
		counter = 0;

		let numb = numbers.children;
		for (let i = 1; i < numb.length - 1; i++ ) {

			numb[i].style.backgroundColor = '';
		}

		sec.innerHTML = 's';
		start.removeAttribute('disabled');
		countClick = false;
	})
}

	start.addEventListener('click', count);


		document.getElementById('x1').addEventListener('click', function(){

			speed = 1000;

			clearInterval(interval);

			if (num > 0 && countClick === false) count();
});


		document.getElementById('x2').addEventListener('click', function(){

			speed = 500;

			clearInterval(interval);

			if (num > 0 && countClick === false) count();
});


		document.getElementById('x3').addEventListener('click', function(){

			speed = 336;

			clearInterval(interval);

			if (num > 0 && countClick === false) count();
})

		// =====================================Сломаный код=======================

// const n = 10;
// const numbers = document.getElementById('numbers');
// const start = document.getElementById('start');
// const pause = document.getElementById('pause');
// const stop = document.getElementById('stop');
// const seconds = document.getElementById('seconds');
// const second = document.getElementById('second');
// const sec = document.getElementById('sec');



// for (let x = 1; x <= n; x += 1) {
// 	let span = document.createElement('span');
// 	span.setAttribute('id', `id_span${x}`);
// 	span.appendChild(document.createTextNode(x));
// 	numbers.insertBefore(span, numbers.children[x]);
// 	if(x < n) {
// 	numbers.insertBefore(document.createTextNode(', '), numbers.children[x + 1]);
// 	}
// }



// let num = 0;
// let counter = 0;
// let speed = 1000;
// let interval;

// sec.innerHTML = '';
// second.appendChild(document.createTextNode(num));


// function count() {
// 	interval = setInterval(function() {
// 	num += 1;
// 	second.innerHTML = num;
// 	if (num === 1) {
// 			sec.innerHTML = '';
// 		} else {
// 			sec.innerHTML = 's';
// 		}

// 	}, speed);

// 	start.setAttribute('disabled', 'true');
// 	checkPause = false;

// 	pause.addEventListener('click', function(){
// 		clearInterval(interval);
// 		start.removeAttribute('disabled');
// 		checkPause = true;
// 	})

// 		stop.addEventListener('click', function(){
// 			clearInterval(interval);
// 			second.innerHTML = 0;
// 			num = 0;
// 			counter = 0;
// 			start.removeAttribute('disabled');
// 			sec.innerHTML = '';
// 	});

// 		let numb = numbers.children;
// 		for (let i = 1; i < numb.length - 1; i++ ) {
// 			numb[i].style.backgroundColor = '';
// 		}

// 		if (counter < n) {
// 		counter += 1;
// 		document.getElementById(`id_span${counter}`).style.background = 'coral';
// 	}


// }


// start.addEventListener('click', count);

// document.getElementById('x1').addEventListener('click', function(){
// 	speed = 1000;
// 	clearInterval(interval);
// 	if (num > 0 && checkPause === false) count();
// });
// document.getElementById('x2').addEventListener('click', function(){
// 	speed = 500;
// 	clearInterval(interval);
// 	if (num > 0 && checkPause === false) count();
// });
// document.getElementById('x3').addEventListener('click', function(){
// 	speed = 336;
// 	clearInterval(interval);
// 	if (num > 0 && checkPause === false) count();
// })

	


