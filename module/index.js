
// ===================================___Первое задание___==================================

function itsMe ( a = 'Drew-fire') {

	console.log(`It's me, ${a}`);

	return (`It's me, ${a}`);
}

// ===========================================___Второе задание___======================================= 

function compare (a, b) {

	if (typeof a !== 'number' || typeof b !== 'number') {
		return console.log('НЕ ЧИСЛО');
	}

	else if (a > b) {
		return (`${a} > ${b}`);
	}
	else if (a < b) {
		return (`${a} < ${b}`);
	}
	else if (a === b) {
		return (`${a} == ${b}`);
	}

}

// ===========================================___Третье задание___======================================= 

function row (a, b, c, str ) {
	let num = [];
	for (let i = 0; i < arguments.length - 1; i += 1) {
		num.push(arguments[i]);
	}

	switch (str) {
		case '<': 
			num.sort();
			return num.join(' < ');
			break;
		case '>': 
			num.sort().reverse();
			return num.join(' > ');
			break;
	}


}

// ===========================================___Четвёртое задание___======================================= 

function fact (n) {
	let result;
	if (n == 0) {
		result = 1;
	}

	else {result = (n != 1) ? n * fact(n - 1) : 1;

	}

	return result;
		
}

// ===========================================___Пятое задание___======================================= 

function matrixDiff (arr1, arr2) {

	 let sumArr1 = 0;
	 let sumArr2 = 0;
	 let result = 0;
	 let sum2 = 0;
	 let resultArr = [];

 for (let x = 0; x < arr1.length; x += 1 ) {

	   for(let y = 0; y < arr1[x].length; y += 1 ) {

		    if (arr1[x].length != arr2[x].length)

		     return "NaN"

		    sumArr1 = arr1[x][y];

		    sumArr2 =arr2[x][y];

		    resultArr[sum2] = Math.abs(sumArr1 - sumArr2);

		    sum2 += 1;

	   }

	 }

	 for (let i = 0; i < resultArr.length; i += 1) {

	  result += resultArr[i];

	 }

return result;

}


// ===========================================___Шестое задание___======================================= 