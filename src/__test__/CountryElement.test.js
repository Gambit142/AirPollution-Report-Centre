import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../redux/ConfigureStore';
import CountryElement from '../components/CountryElement';

describe('Check All tests for CountryElement Component', () => {
  test('If it renders content on the page', async () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CountryElement />
        </Router>
      </Provider>,
    );
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
    expect(screen.queryByText(/Loading.../)).toBeInTheDocument();
    expect(getByTestId('Loading')).toBeInTheDocument();
    expect(getByTestId('Loading')).toHaveTextContent('Loading...');
  });
});
