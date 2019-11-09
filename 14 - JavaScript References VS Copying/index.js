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

// one way: destructure into new array
const teamNew = [...players]; // this makes a copy of the original
teamNew[0] = 'Susan';
console.log('players -- should have Wes still in first position:', players);

// or Wes's method of calling slice() with no args
const teamNewSliced = players.slice();
teamNewSliced[0] = 'Susan';
console.log(
  'players -- should once again have Wes still in first position:',
  players,
);

// or create a new array and concat the old one in
const teamNewConcat = [].concat(players);
teamNewConcat[0] = 'Susan';
console.log('players -- should still have Wes in first position:', players);

// or use Array.from()
const teamNewFrom = Array.from(players);
teamNewFrom[0] = 'Susan';
console.log('players -- no Susan here:', players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

const person = {
  name: 'Wes Bos',
  age: 80,
};
console.log('person.nationality -- original:', person.nationality);
console.log('person.age -- originals:', person.age);

// and think we make a copy:
const person2 = person;
person2.nationality = 'Canadian';
person2.age = '20';
console.log(
  "person.nationality -- it has been mutated to 'Canadian':",
  person.nationality,
);
console.log("person.age -- it's also been mutated:", person.age);

// how do we take a copy instead?
const personNew = Object.assign({}, person);
personNew.nationality = 'Australian';
console.log(
  "person.nationality -- should still be 'Canadian':",
  person.nationality,
);

// We will hopefully soon see the object ...spread
const personNewSpread = { ...person };
personNewSpread.nationality = 'Australian';
console.log(
  "person.nationality -- should still be 'Canadian':",
  person.nationality,
);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const mvp = {
  name: 'Lebron James',
  teams: {
    first: 'Cleveland Cavaliers',
    second: 'Miami Heat',
    third: 'Cleveland Cavaliers',
    fourth: 'LA Lakers',
  },
};

const mvpNew = Object.assign({}, mvp, { name: 'Stephen Curry' });
console.log("mvp.name -- should still be 'Lebron James':", mvp.name);
mvpNew.teams.second = 'Chicago Bulls';
console.log(
  "mvp.teams.second -- oh no! It was mutated to 'Chicago Bulls':",
  mvp.teams.second,
);

const mvpNewSpread = { ...mvp };
mvpNewSpread.teams.third = 'LA Clippers';
console.log(
  "mvp.teams.third -- this also mutated the value to 'LA Clippers':",
  mvp.teams.third,
);

// a hack
const mvpNewHack = JSON.parse(JSON.stringify(mvp));
mvpNewHack.teams.fourth = 'Houston Rockets';
console.log(
  "mvp.teams.fourth -- should still be 'LA Lakers':",
  mvp.teams.fourth,
);
