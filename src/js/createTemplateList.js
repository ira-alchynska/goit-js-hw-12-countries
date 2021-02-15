import refs from './refs';
import someCountries from '../templates/countries.hbs';

function createTemplateList(countryAray) {
  const list = someCountries(countryAray);
  refs.cardContainer.insertAdjacentHTML('beforeEnd', list);
}

/* function createTemplateList(countryArray) {
  const list = countryArray.reduce(
    (acc, country) => acc + `<li>${country.name}</li>`,
    '',
  );
  refs.cardContainer.insertAdjacentHTML('beforeEnd', list);
} */
export default createTemplateList;
