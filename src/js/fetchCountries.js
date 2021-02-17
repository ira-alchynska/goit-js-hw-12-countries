import { chooseCase, clearPage } from '../index';
import refs from './refs';
import { showNotificationFail } from './notification';

function fetchCountries(e) {
  const inputData = e.target.value;
  refs.cardContainer.innerHTML = '';

  fetch(`https://restcountries.eu/rest/v2/name/${inputData}`)
    .then(response => response.json())
    .then(rez => {
      rez.status ? showNotificationFail() : chooseCase(rez);
    })
    .catch(error => {
      console.error(error);
      showNotificationFail();
      clearPage();
    });
}

//   axios
//     .get(`https://restcountries.eu/rest/v2/name/${inputData}`)
//     .then(rez => chooseCase(rez))
//     .catch(error => console.log(error));

export default fetchCountries;
