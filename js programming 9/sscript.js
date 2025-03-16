'use strict' /*
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const result = loginEmail.toLowerCase().includes(email)
  ? 'Same Emails!'
  : 'Different Emails!';
console.log(result);*/; // const announcement = //   'All passengers come to boarding door 23. Boarding door 23!'; // console.log(announcement.replace(/door/g, 'gate'));

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(...menu);
// let name = [],
//   mainMenu = [];
// ({ name, mainMenu } = restaurant);
// console.log(name, mainMenu);
// const [a, b, c] = fmainMenu;
// console.log(fname, a, b, c);
// let open = 0;
// let close = 0;
// ({ open, close } = restaurant.openingHours.thu);
// console.log(open, close);

//Coding Challenge #1
//Maps: Iteration
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer == question.get('correct')));
*/
// console.log('Hello World!');
/*
const seatInput = prompt('Enter the seat name : ');
function middleSeatIdentifier(input) {
  const lastLetter = input.slice(-1);
  return lastLetter == 'B' || lastLetter == 'E'
    ? 'Middle Seat'
    : 'Not a Middle Seat';
}
console.log(middleSeatIdentifier(seatInput));
*/
/*
let n = prompt('Name?');
const nLower = n.toLowerCase();
console.log(nLower[0].toUpperCase() + nLower.slice(1));
// console.log(n);*/
// const string = '1234567899876';
// console.log(string.length);
// function maskCreditCard(str) {
//   const result = str.slice(-4).padStart(str.length, '*');
//   return result;
// }
// console.log(maskCreditCard('1625752411458001'));
