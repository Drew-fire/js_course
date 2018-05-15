			// Первая функция

function removeKeys1 ( obj, arr ) {

	let objKey = Object.keys(obj);

	for (let key1 = 0; key1 < objKey.length; key1 += 1) {

		let keyVel = objKey[key1];

		for (let key2 = 0; key2 < arr.length; key2 += 1) {

			if ( keyVel == arr[key2] ) {

				delete obj[keyVel];
			}
		}
	}

	return obj;
}

			// Вторая функция

function removeKeys2 ( obj, arr ) {

	let objKey = Object.keys(obj);

	for (let key1 = 0; key1 < objKey.length; key1 += 1) {

		let keyVal = objKey[key1];

		for (let key2 = 0; key2 < arr.length; key2 += 1) {

			if ( keyVal == arr[key2] ) {

				delete obj[keyVal];
			}
		}
	}

	let obj1 = Object.assign({}, obj);


	return obj1;
}

		// Третья функция

function absDiff(a) {

	return (b) => Math.abs(a - b);
}
