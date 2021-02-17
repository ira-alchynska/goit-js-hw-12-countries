import axios from 'axios';
import debounce from 'lodash.debounce';

import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import createTemplateList from './js/createTemplateList';
import createItem from './js/createItem';
import './styles.css';
import { showNotificationToMany } from './js/notification';
const debounserColectData = debounce(fetchCountries, 500);
refs.inputSearch.addEventListener('input', debounserColectData);

function markup(arr) {
  if (arr.length > 1) {
    createTemplateList(arr);
  } else createItem(arr[0]);
}

export function chooseCase(arr) {
  if (arr.length > 10) {
    showNotificationToMany();
  } else clearPage();
  markup(arr);
}

export function clearPage() {
  refs.cardContainer.innerHTML = '';
  refs.inputSearch.innerHTML = '';
  refs.inputSearch.value = '';
}
