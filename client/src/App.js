import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ViewAllPage from './pages/ViewAllPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/view-all'>
          <ViewAllPage />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
