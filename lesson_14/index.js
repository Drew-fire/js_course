function add(str = '❤🇺🇦') {
	let numb = 0;
	let sum = 0;
	let sum1 = 0;

	for (let key1 of str) {

		for (let key2 in key1) {

			sum += key1.charCodeAt(key2);
		}

		numb++;

		sum1 = sum1 + sum;

		sum = 0;

	}

	return sum1 / numb;
}

function clearNumbers (arr) {
	for (let key = 0; key < arr.length; key++) {

		for (key2 = 0; key2 < arr[key].length; key2++) {
			if (typeof arr[key][key2] !== 'number') {

				delete arr[key][key2];
			}
		}
	}
	return arr;
}

// function splitArray () {
// 	let arrS = [];
// }




// console.log(add('🍔😁'));