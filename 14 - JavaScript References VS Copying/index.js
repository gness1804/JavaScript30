/* eslint-disable no-console */
// start with strings, numbers and booleans
let age = 100;
// eslint-disable-next-line prefer-const
let age2 = age; // age2 is assigned the value of 100.
console.log('age:', age);
console.log('age2:', age2);

age = 200;
console.log('age second iter:', age);
console.log('age2 second iter:', age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log('team:', team);
team[3] = 'Ken';
console.log('players after team insert:', players); // it replaced 'Poppy' with 'Ken'

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
// const person = {
//   name: 'Wes Bos',
//   age: 80
// };

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
