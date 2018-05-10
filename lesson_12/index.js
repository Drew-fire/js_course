const arr1 = [56, 87, -12, 6, 139];

let sum = 0;
let max = arr1[0], min = max;

for(let i = 0; i < arr1.length; i++) {
	sum += arr1[i];
	if (max < arr1[i]) max = arr1[i];
    if (min > arr1[i]) min = arr1[i];
}

console.log(sum);
console.log(sum / arr1.length);
console.log(max);
console.log(min);

const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };

let arr2 = obj1['value'], arr3 = [];

cycle:

	for (id1 = obj1['from']; id1 <= obj1['to']; id1++) {
		for (id2 of obj1['ignore']) {
			if (id1 == id2) continue cycle;
		}

		arr3.push(arr2[id1]);
	}
console.log(arr3.join(', '))