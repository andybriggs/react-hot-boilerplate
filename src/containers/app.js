import React, { Component } from 'react';
import { Link } from 'react-router';
import '../style';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Show time</h1>
        <div>
          <Link to="/home">Home</Link>&nbsp;
          <Link to="/funsies">Funsies</Link>
        </div>
        { this.props.children }
      </div>
    );
  }
};
