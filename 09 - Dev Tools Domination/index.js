/* eslint-disable no-console */
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

/* eslint-disable no-unused-vars */
const makeGreen = () => {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};
/* eslint-enable no-unused-vars */

// clearing
console.clear();

// Regular
console.log('sanity check');

// Interpolated
console.log('My name is %s', 'Iron Man');

// Styled
console.log('%c Iron Man text', 'color: #f00');
// warning!
console.warn('Warning: something bad might happen!');

// Error :|
console.error('Error: something went wrong!');

// Info
console.info('Foo says hi');

// Testing
console.assert(typeof makeGreen === 'string', 'it is a function');

// Viewing DOM Elements
const para = document.querySelector('p');
console.dir(para);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name} and he is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting

// timing
