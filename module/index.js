
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

// ===========================================___Чеивёртое задание___======================================= 