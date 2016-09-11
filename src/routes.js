import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from './containers/app.js';
import { Home, Funsies } from './pages';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="funsies" component={Funsies} />
      </Route>
    </Router>
  );
};

export default Routes;
