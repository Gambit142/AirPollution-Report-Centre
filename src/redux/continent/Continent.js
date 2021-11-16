const FETCH_CONTINENT = 'airpollution/continent/FETCH_CONTINENT';
const APIURL = 'https://disease.sh/v3/covid-19/countries';
const initialState = [];

export const fetchContinent = () => async (dispatch) => {
  const response = await fetch(APIURL);
  const data = await response.json();
  const continentData = data.filter((item) => item.continent === 'Africa');
  dispatch({
    type: FETCH_CONTINENT,
    continentData,
  });
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENT:
      return action.continentData;
    default:
      return state;
  }
};

export default continentReducer;
