import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/ConfigureStore';
import { fetchContinent } from './redux/continent/Continent';

store.dispatch(fetchContinent());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
