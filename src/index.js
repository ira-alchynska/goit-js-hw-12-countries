import debounce from 'lodash.debounce';
/* Исправил импорт debounce */
import { showNotificationFail } from './js/notification';
import fetchCountries from './js/fetchCountries';
import { renderPage, clearPage } from './js/render';
import refs from './js/refs';
import './styles.css';

refs.inputSearch.addEventListener('input', debounce(countrySearch, 500));

export default function countrySearch() {
  let currentCountry = refs.inputSearch.value;
  if (currentCountry !== '') {
    fetchCountries(currentCountry)
      .then(data => {
        if (!data) {
          return;
        }
        renderPage(data);
      })
      .catch(error => {
        console.log(error);
        showNotificationFail();
        refs.inputSearch.value = '';
        clearPage();
      });
  }
  clearPage();
}
