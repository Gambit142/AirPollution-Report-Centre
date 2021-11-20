import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../redux/ConfigureStore';
import ContinentElement from '../components/ContinentElement';
import { FETCH_CONTINENT } from '../redux/continent/Continent';

store.dispatch({
  type: FETCH_CONTINENT,
  continentData: [
    {
      updated: 1637328762088,
      country: 'Mozambique',
      population: 40135620,
      countryInfo: {
        _id: 4,
        lat: 33,
        long: 65,
        flag: 'https://disease.sh/assets/img/flags/af.png',
      },
    },
  ],
});
describe('Check All tests for CountryElement Component', () => {
  test('If it renders content on the page', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ContinentElement />
        </Router>
      </Provider>,
    );
    expect(getByTestId('map-item-continent')).toBeInTheDocument();
    expect(screen.getByText('Mozambique')).toBeInTheDocument();
  });
  test('If it creates exact snapsshot of component', async () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <ContinentElement />
        </Router>
      </Provider>,
    );
    screen.debug();
    expect(tree).toMatchSnapshot();
  });
});
