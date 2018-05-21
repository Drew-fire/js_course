// function init ( arrObj, n ) {

// 	let li = document.body.appendChild(document.createElement('ul'));

// 	for (i = 0; i < n; i++) {

// 		let li = ul.appendChild(document.createElement('li'));

// 		li.className = arrObj.className;

// 		for (key in arrObj.attributes) {
// 			li.setAttribute(key, arrObj.attributes[key])
// 		}
// 		li.innerHTML = arrObj.content;
// 	}
// }

// init ({ className: 'class', attributes: { 'data-name': 'Anatoliy','data-name2': 'Anatoliy2' }, content: 'Some Text' }, 5);

// function listen() {
// 	let ul = document.querySelector('ul');
// 	if (ul) {
// 		document.body.removeChild(ul);
// 		return console.log(true);
// 	} else {
// 		return console.log(false);
// 	}
// }

// document.querySelector('button').addEventListener('click', listen);

function init ( arrObj, n ) {

	let ul = document.createElement('ul');

	document.body.appendChild(ul);

	for (i = 0; i < n; i++) {

		let li = document.createElement('li');

		ul.appendChild(li);

		li.className = arrObj.className;

		for (key in arrObj.attributes) {

			li.setAttribute(key, arrObj.attributes[key])
		}
		li.innerHTML = arrObj.content;
	}
}

function listen() {

	let ul = document.querySelector('ul');

	if (ul) {

		document.body.removeChild(ul);

		return console.log(true);

	} else {

		return console.log(false);
	}
}

document.querySelector('button').addEventListener('click', listen);