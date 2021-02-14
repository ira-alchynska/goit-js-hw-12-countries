import refs from './refs';

function createTemplateList(countryArray) {
  const list = countryArray.reduce(
    (acc, country) => acc + `<li>${country.name}</li>`,
    '',
  );
  refs.cardContainer.insertAdjacentHTML('beforeEnd', list);
}
export default createTemplateList;
