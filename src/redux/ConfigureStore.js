import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import continentReducer, { fetchContinent } from './continent/Continent';

const reducer = combineReducers({
  continentReducer,
});
const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

store.dispatch(fetchContinent());

export default store;
