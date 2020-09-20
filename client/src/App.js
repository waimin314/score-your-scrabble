import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ViewAllPage from './pages/ViewAllPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/view-all'>View All</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/view-all'>
            <ViewAllPage />
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
