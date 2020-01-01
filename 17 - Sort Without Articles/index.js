const listElem = document.querySelector('#bands');

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const regex = /^(The|An?)\s/i;

const sortedBands = bands.sort((a, b) => {
  const strippedA = a.replace(regex, '').trim();
  const strippedB = b.replace(regex, '').trim();

  if (strippedA < strippedB) {
    return -1;
  }
  if (strippedA > strippedB) {
    return 1;
  }
  return 0;
});

listElem.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
