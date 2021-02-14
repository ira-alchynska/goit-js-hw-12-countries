import axios from 'axios';
import debounce from 'lodash.debounce';
import { alert, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
import refs from './js/refs';
//import someCountries from './templates/countries.hbs';
//import oneCountry from './templates/country.hbs';
import fetchCountries from './js/fetchCountries';
import createTemplateList from './js/createTemplateList';
import createItem from './js/createItem';
import './styles.css';

const debounserColectData = debounce(fetchCountries, 1000);
refs.inputSearch.addEventListener('input', debounserColectData);

function markup(arr) {
  if (arr.length > 1) {
    createTemplateList(arr);
  } else createItem(arr[0]);
}

export function chooseCase(arr) {
  if (arr.length > 10) {
    error({
      text: 'To many matches!',
    });
  } else markup(arr);
}
