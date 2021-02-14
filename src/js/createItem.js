import refs from './refs';

function createItem(country) {
  const item = `<li class="list-info-country">
      <h1 class="title">${country.name}</h1>
      <div class="container">
        <div class="info">
          <p class="capital"><span class="highlight">Capital: ${
            country.capital
          }</span></p>
          <p class="capital"><span class="highlight">Population: ${
            country.population
          }</span></p>
          <p class="languages hightlight">Languages:</p>
          <ul class="list-language">
           ${createLanguageList(country.languages)}
          </ul>
        </div>
        <img src="${country.flag}" alt="flag" class="flag">
     </div>
    </li>`;
  refs.cardContainer.insertAdjacentHTML('beforeEnd', item);
}

function createLanguageList(languageArray) {
  const languages = languageArray.reduce(
    (acc, language) => acc + `<li>${language.name}</li>`,
    '',
  );
  return languages;
}

export default createItem;
