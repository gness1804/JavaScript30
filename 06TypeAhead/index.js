const searchBox = document.querySelector('.search');
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

searchBox.addEventListener('keyup', async () => {
  const searchBoxVal = searchBox.value;
  const results = await fetch(endpoint);
  const resultsJSON = await results.json();
  const filteredResults = resultsJSON.filter(res => res.city.includes(searchBoxVal));
  console.log('filteredResults:', filteredResults);
});
