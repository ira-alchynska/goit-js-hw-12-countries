function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(
    response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    },
  );
}
export default fetchCountries;

//   axios
//     .get(`https://restcountries.eu/rest/v2/name/${name}`)
//     .then(rez => console.log(rez))
//     .catch(error => console.log(error));
