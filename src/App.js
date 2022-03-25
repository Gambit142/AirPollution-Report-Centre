import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import ContinentElement from './components/ContinentElement';
import CountryElement from './components/CountryElement';
import WorldElement from './components/WorldElement';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WorldElement />
        </Route>
        <Route path="/continent/:continentName">
          <ContinentElement />
        </Route>
        <Route path="/country">
          <CountryElement />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
