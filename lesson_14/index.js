
function add(string = '❤️🇺🇦') {

 let sum = 0;

 	for (let i = 0; i < string.length; i += 2) {

  		 sum += string.charCodeAt(i) + string.charCodeAt(i + 1);

 		}

 return sum / (string.length / 2);

}


function clearNumbers ( arr ) {

	 for (let x = 0; x < arr.length; x += 1) {

	     for (let k = 0; k < arr[x].length; k += 1) {

	         if (typeof arr[x][k] !== "number") {

	             arr[x].splice(k, 1);

	             k -= 1;
	         }
	     }
 }
 return arr;
}


function reverse (...arg) {

		 const input = arg.reverse();

		 let output = [];

		 	for (let i = 0; i < input.length; i += 1) {

				   const split = input[i].split('');

				   const reversed = split.reverse();

		   output.push(reversed.join(''));
		 }

 return output;

}


function splitArray(arr, n) {

 const result = [];

	 for (let i = 0; i < arr.length; i += n) {

	   result.push(arr.slice(i, i + n));

	 }

 return result;
}

















// function add(str = '❤🇺🇦') {
// 	let numb = 0;
// 	let sum = 0;
// 	let sum1 = 0;

// 	for (let key1 of str) {

// 		for (let key2 in key1) {

// 			sum += key1.charCodeAt(key2);
// 		}

// 		numb++;

// 		sum1 = sum1 + sum;

// 		sum = 0;

// 	}

// 	return sum1 / numb;
// }

// function clearNumbers (arr) {
// 	for (let key = 0; key < arr.length; key++) {

// 		for (key2 = 0; key2 < arr[key].length; key2++) {
// 			if (typeof arr[key][key2] !== 'number') {

// 				delete arr[key][key2];
// 			}
// 		}
// 	}
// 	return arr;
// }

// // function splitArray () {
// // 	let arrS = [];
// // }




// // console.log(add('🍔😁'));