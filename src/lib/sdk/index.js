import 'whatwg-fetch';

export const getData = async (country) => {
  const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`;

  let data = {};
  try {
    data = await fetch(url, {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': 'ca93407b12msh6207f84fb92a18ep1d6b56jsn4ab719b2e4d0'
      }
    })
      .then(blob => blob.json());

    return(data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e, 'Error fetching data');
    return(e);
  }
};