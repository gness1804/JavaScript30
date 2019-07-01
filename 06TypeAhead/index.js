const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(res => cities.push(...res));

const findMatches = () => {
  const searchBoxVal = searchBox.value.toLowerCase();
  const filteredResults = cities.filter(res => res.city.toLowerCase().includes(searchBoxVal) || res.state.toLowerCase().includes(searchBoxVal));
  const html = filteredResults.map(cityObj => `
    <li>
      <span class="name">${cityObj.city}, ${cityObj.state}</span>
      <span class="population">${cityObj.population}</span>
    <li>
  `).join('');
  suggestions.innerHTML = html;
};

searchBox.addEventListener('keyup', findMatches);
