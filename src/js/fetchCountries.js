import { chooseCase } from '../index';
import refs from './refs';
import { showNotificationFail } from '../index';

function fetchCountries(e) {
  const inputData = e.target.value;
  console.log(inputData);
  refs.cardContainer.innerHTML = '';
  refs.inputSearch.value = '';
  fetch(`https://restcountries.eu/rest/v2/name/${inputData}`)
    .then(response => response.json())
    .then(rez => chooseCase(rez))
    .catch(error => {
      console.log(error);
      showNotificationFail();
    });
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/name/${inputData}`)
  //     .then(rez => chooseCase(rez))
  //     .catch(error => console.log(error));
}

export default fetchCountries;
