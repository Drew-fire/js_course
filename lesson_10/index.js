const myAge = 27;

let word = "лет";

if ((myAge % 10) == 1) {word = "год"};

if ((myAge % 10) >= 2 && (myAge % 10) <= 4) {word = "года"};

if ((myAge % 100) >= 5 && (myAge % 100) <= 14) {word = "лет"};

console.log(`Мой возраст ${myAge} ${word}`);