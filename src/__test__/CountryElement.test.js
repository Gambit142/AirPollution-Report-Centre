import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../redux/ConfigureStore';
// import { fetchPollutantApi, fetchContinentApi } from '../components/fetchApi';
import CountryElement from '../components/CountryElement';

describe('Check All tests for CountryElement Component', () => {
  // test('If it renders content on the page', () => {
  //   const { getByTestId } = render(
  //     <Provider store={store}>
  //       <Router>
  //         <CountryElement />
  //       </Router>
  //     </Provider>,
  //   );
  //   // screen.debug();
  //   expect(getByTestId('map-item-continent')).toBeInTheDocument();
  //   expect(screen.getByText('Mozambique')).toBeInTheDocument();
  // });
  test('If it renders content on the page', async () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CountryElement />
        </Router>
      </Provider>,
    );
    screen.debug();
    // await waitFor(() => expect(screen.queryByText(/Mozambique/)).toBeInTheDocument());
    expect(tree).toMatchSnapshot();
    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();
  });
  test('If it renders content on the page', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CountryElement />
        </Router>
      </Provider>,
    );
    screen.debug();
    // await waitFor(() => expect(screen.queryByText(/Mozambique/)).toBeInTheDocument());
    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();
    expect(getByTestId('Loading')).toBeInTheDocument();
    expect(getByTestId('Loading')).toHaveTextContent('Loading...');
  });
});
