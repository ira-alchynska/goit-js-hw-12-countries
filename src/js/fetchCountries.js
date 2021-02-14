import { chooseCase } from '../index';
import refs from './refs';

function fetchCountries(e) {
  const inputData = e.target.value;
  console.log(inputData);
  refs.cardContainer.innerHTML = '';
  fetch(`https://restcountries.eu/rest/v2/name/${inputData}`)
    .then(response => response.json())
    .then(rez => chooseCase(rez))
    .catch(error => console.log(error));
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/name/${inputData}`)
  //     .then(rez => chooseCase(rez))
  //     .catch(error => console.log(error));
}

export default fetchCountries;
