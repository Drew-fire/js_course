
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

	const btn = document.getElementsByTagName("button");

	btn.addEventListener('click', function() {

		let ul = document.querySelector('ul');

		if (ul) {

			document.body.removeChild(ul);

			return true;

		} else {

			return false;
		}
	});
}