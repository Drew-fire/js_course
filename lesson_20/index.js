

////////////////////////////////____New sintax____////////////////////////////////

class Human {
	constructor(obj) {
		this.name = obj.name;
		this.age = obj.age;
	}

	sayHello() {
		console.log( `Hello, my name is  ${this.name}, i am ${this.age} years old` );
	}
}

class AlevelStudent extends Human {
	constructor(obj) {
		super(obj);
		this.marks = obj.marks;
	}

	averageMark() {

		let sum = 0;
		let average = 0;
		for (let j in this.marks) {
				sum += this.marks[j];
		}

		average = sum / this.marks.length;

		console.log( `My average score is: ${average}.` );
	}

}

////////////__Проверка__//////////////

// let student = new AlevelStudent({
// 	name: "Andrey",
// 	age: 27,
// 	marks: [9, 8, 6, 10, 7],
// });
// student.sayHello();
// student.averageMark();

// console.log(student);

///////////////////////////////////


//////////////////////////////////____Old sintax____////////////////////////////////

// function Human(obj) {
// 	this.name = obj.name;
// 	this.age = obj.age;
// }

// Human.prototype.sayHello = function() {
// 	console.log( `Hello, my name is  ${this.name}, i am ${this.age} years old` );
// }

// function AlevelStudent(obj) {
// 	this.marks = obj.marks;
// }

// AlevelStudent.prototype.averageMark = function() {
// 	let sum = 0;
// 		let average = 0;
// 		for (let j in this.marks) {
// 				sum += this.marks[j];
// 		}

// 		average = sum / this.marks.length;

// 		console.log( `My average score is: ${average}.` );
		
// }

///////////////////////////////////////////////////////////////////////////////