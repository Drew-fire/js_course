

function itsMe ( a = 'Drew-fire') {

	console.log(`It's me, ${a}`);

	return (`It's me, ${a}`);
}

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


function row () {
	
}