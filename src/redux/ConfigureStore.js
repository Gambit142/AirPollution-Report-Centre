import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import continentReducer from './continent/Continent';
import worldReducer from './continent/World';

const reducer = combineReducers({
  continentReducer,
  worldReducer,
});
const middleware = [thunk, logger];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
