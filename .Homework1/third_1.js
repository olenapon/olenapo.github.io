// task 3

let c = 1;
let d = 5;
console.log(c,d);

d = c;
console.log(d,c);

// task 4

let hasHusband;
let woman;
const Me = {
    name: `Olena`,
    age: 36,
    woman: true,
    hasHusband,
    children: null
};
console.log(Me);

// task 5

let isAdult = confirm("Are you over 18th years old?");
console.log(isAdult)

// task 6

let name;
let surname;
let studyGroup;
let yearOfBirth;

name = 'Olena';
surname = 'Ponomareva';
studyGroup = 'TA 2021';
yearOfBirth = 1985;

let isMarried = confirm('Is married?');
console.log(typeof yearOfBirth,yearOfBirth);
console.log(typeof isMarried,isMarried);
console.log(typeof name, name, surname, studyGroup);

let g;
let f = null;
console.log(g,f)

// task 7

let login = prompt("Please enter your user name:");
let email = prompt("Please enter your email:");
let password = prompt("Please enter your password:");
alert("Dear " + login + " your email is "+ email + " and your password is " + password);


// task 8

let minute = 60;
let hour = minute * 60;
let day = hour * 24;
let month = day * 30;

alert("there are " + hour + " seconds in the hour and " + day + " in the day and " + month + " in the month" );