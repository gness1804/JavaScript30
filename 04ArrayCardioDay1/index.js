// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
/* eslint-disable no-console */

const inventors = [
  {
    first: 'Albert', last: 'Einstein', year: 1879, passed: 1955,
  },
  {
    first: 'Isaac', last: 'Newton', year: 1643, passed: 1727,
  },
  {
    first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642,
  },
  {
    first: 'Marie', last: 'Curie', year: 1867, passed: 1934,
  },
  {
    first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630,
  },
  {
    first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543,
  },
  {
    first: 'Max', last: 'Planck', year: 1858, passed: 1947,
  },
  {
    first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979,
  },
  {
    first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852,
  },
  {
    first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905,
  },
  {
    first: 'Lise', last: 'Meitner', year: 1878, passed: 1968,
  },
  {
    first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909,
  },
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filterInventors = () => inventors.filter(({ year }) => year >= 1500 && year < 1600);
console.info('The filtered inventors:');
console.table(filterInventors());
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const mapInventors = () => inventors.map(({ first, last }) => `${first} ${last}`);
console.info('The mapped inventors:');
console.table(mapInventors());

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortInventors = () => inventors.sort(({ year: aYear }, { year: bYear }) => aYear - bYear);
console.info('The sorted inventors:');
console.table(sortInventors());

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const getInventorLifespans = () => inventors.reduce((acc, curr) => {
  curr.lifespan = curr.passed - curr.year;
  acc.push(curr);
  return acc;
}, []);
console.info('The inventors\' lifespans:');
console.table(getInventorLifespans());

// 5. Sort the inventors by years lived
const sortInventorsByLifespan = () => getInventorLifespans()
  .sort(({ lifespan: aLifespan }, { lifespan: bLifespan }) => aLifespan - bLifespan);

console.info('The inventors sort by lifespan:');
console.table(sortInventorsByLifespan());

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = [
  'Boulevards of Paris',
  'City walls of Paris',
  'Thiers wall',
  'Wall of Charles V',
  'Wall of Philip II Augustus',
  'City gates of Paris',
  'Haussmann\'s renovation of Paris',
  'Boulevards of the Marshals',
  'Boulevard Auguste - Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  'Boulevard de l\'Amiral-Bruix',
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  'Boulevard du Général - d\'Armée-Jean-Simon',
  'Boulevard Haussmann',
  'Boulevard de l\'Hôpital',
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard - Lenoir',
  'Boulevard de Rochechouart',
  'Boulevard Saint - Germain',
  'Boulevard Saint - Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

const regex = /\sde\s/;
const extractTheBoulevardsWithDe = () => boulevards.filter(blvd => regex.test(blvd));

console.info('The Parisian boulevards with \'de\':');
console.table(extractTheBoulevardsWithDe());

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeopleByLastName = () => people.sort();

console.info('The sorted people');
console.table(sortPeopleByLastName());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const sumUpData = () => data.reduce((acc, curr) => {
  if (!Object.hasOwnProperty.call(acc, curr)) {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});

console.info('The object with sum of each item:');
console.table(sumUpData());
