// ## Array Cardio Day 2
/* eslint-disable no-console */

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

// const comments = [
//   { text: 'Love this!', id: 523423 },
//   { text: 'Super good', id: 823423 },
//   { text: 'You are the best', id: 2039842 },
//   { text: 'Ramen is my fav food ever', id: 123523 },
//   { text: 'Nice Nice Nice!', id: 542328 },
// ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const thisYear = new Date().getFullYear();
/**
 *
 * @param {{ name: string, year: number}[]} arr - a list of people
 * @returns {boolean} - whether or not one or more of the people is of age
 */
const isSomeoneOfAge = arr => arr.some(person => thisYear - person.year >= 19);
console.info(`Are one or more of the people 19 or older? ${isSomeoneOfAge(people) ? 'Yes' : 'No'}`);

// Array.prototype.every() // is everyone 19 or older?
/**
 *
 * @param {{ name: string, year: number}[]} arr - a list of people
 * @returns {boolean} - whether or not all of the people are of age
 */
const isEveryoneOfAge = arr => arr.every(person => thisYear - person.year >= 19);
console.info(`Are all of the people 19 or older? ${isEveryoneOfAge(people) ? 'Yes' : 'No'}`);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
