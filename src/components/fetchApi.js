const APIURL = 'https://disease.sh/v3/covid-19/countries';

export const fetchContinentApi = async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
};

export const fetchPollutantApi = async (APIURL) => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
};
