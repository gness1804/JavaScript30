/* eslint-disable indent */
const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(res => cities.push(...res));

/**
 * Takes an input full name string of a city or state and adds formatting to the portion that matches the search text
 * @param {string} fullNameStr - the full city or state name: Example: "Chicago"
 * @param {string} searchBoxVal - the value entered into the search box, usually a substring of the city/state name. Example: "chi"
 * @returns {string} - the formatted string to display
 */
const highlightResult = (fullNameStr, searchBoxVal) =>
  fullNameStr.replace(
    new RegExp(`${searchBoxVal}`, 'gi'),
    `<span class="hl">${searchBoxVal}</span>`,
  );

/**
 * Formats a population figure by adding commas for thousands. Thanks to the following source for the regex: https://coderwall.com/p/uccfpq/formatting-currency-via-regular-expression
 * @param {string} pop - the population, which comes in as a string. Example: '235980'
 * @returns {string} - the same population number, but with commas added for readability. Example: '235,980'
 */
const addCommasToPopulation = pop =>
  pop.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const findMatches = () => {
  const searchBoxVal = searchBox.value;
  const filteredResults = cities.filter(
    res =>
      res.city.toLowerCase().includes(searchBoxVal.toLowerCase()) ||
      res.state.toLowerCase().includes(searchBoxVal.toLowerCase()),
  );
  const html = filteredResults
    .map(
      cityObj => `
    <li>
      <span class="name">${highlightResult(
        cityObj.city,
        searchBoxVal,
      )}, ${highlightResult(cityObj.state, searchBoxVal)}</span>
      <span class="population">${addCommasToPopulation(
        cityObj.population,
      )}</span>
    <li>
  `,
    )
    .join('');
  suggestions.innerHTML = html;
};

searchBox.addEventListener('keyup', findMatches);
