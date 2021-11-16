import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ContinentElement />
        </Route>
        <Route path="/missions">
          <CountryElement />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
