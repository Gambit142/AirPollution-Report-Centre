import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import ContinentElement from './components/ContinentElement';
import CountryElement from './components/CountryElement';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
