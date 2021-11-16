import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  continentReducer,
});
const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
