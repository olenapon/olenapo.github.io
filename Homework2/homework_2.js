//Task 1

let x = 1;
let y = 2;

// 1

let res1 = String (x) + String(y);
console.log(res1);
console.log(typeof res1);

//2

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

//3

let res3 = y > x;
console.log(res3);
console.log(typeof res3);

// 4

let res4 = y - "x";
console.log(res4);
console.log(typeof res4);

// Task 2 a) парним додатним (четное положительное?); b) кратним числу 7. Результат перевірки вивести в консоль.

let num = prompt("Please enter the number:",'');
if (!num) {
    console.log("Enter valid value")
}
if (num % 2 == 0 && num >= 0) {
    console.log("Парне додатне");
}
    else if (num % 7 == 0) {
    console.log("Кратне 7");
}
else {
    console.log("Інше");
}

// Task 3 Array

let arr = new Array();
arr [0] = 5;
arr [1] = "1,2,3";
arr [2] = 5 > 4;
arr [3] = null;
console.log(arr.length);

//
let newArrElement = prompt("Enter any:",'');
arr [5] = newArrElement;

//
console.log(arr[5]);

//
console.log(arr.shift());
console.log(arr);

// Task 4

let cities = ["Rome", "Lviv", "Kyiv"];
let stringCities = cities.join('*');
console.log(stringCities);

// Task 5

let isAdult = prompt("Are you over 18th years old? Please enter your age:",'')
if (isAdult >= 18) {
    console.log("You have come of age!");
} else if (isAdult < 10) {
    console.log("You are too yang!");
} else {
    console.log("Please, wait until 18th!");
}

// Task 6 Triangle area

let a = prompt("First side, a",'');
let b = prompt("Second side, b",'');
let c = prompt("Third side is biggest, c",'');

if (!a || !b || !c) {
    console.log("Incorrect data")
} else if (a**2 + b**2 === c**2) {
    let p = (a + b + c) / 2;
    let s = Math.sqrt((p * (p - a) * (p - b) * (p - c)));
    console.log("Это прямоугольный треугольник его площадь равна = " + s.toFixed(3));
} else {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log("Площадь треугольника = " + s.toFixed(3));
}


