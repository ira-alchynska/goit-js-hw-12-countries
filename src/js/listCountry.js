import refs from './refs';
import countrySearch from '../index';

export default function createListCountries(data) {
  refs.listCountries.classList.add('list');
  data.map(item =>
    refs.listCountries.insertAdjacentHTML(
      'beforeend',
      `<li class="link" data-item="${item.name}">${item.name}</li>`,
    ),
  );

  refs.listCountries.addEventListener('click', event => {
    const countryName = event.target;
    refs.inputSearch.value = countryName.dataset.item;
    refs.listCountries.classList.remove('list');

    countrySearch();
  });
}
