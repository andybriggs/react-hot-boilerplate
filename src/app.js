import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Covfefe } from './components';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Show time</h1>
        <div>
          <Link to="/home">Home</Link>&nbsp;
          <Link to="/covfefe">Covfefe</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/covfefe" component={Covfefe} />
      </div>
    </Router>
  );
};

export default App;
