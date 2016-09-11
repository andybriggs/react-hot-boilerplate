import React, { Component } from 'react';
import './style';
import img from './img/awesome.jpg';

const App = () => {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <h1>Show time</h1>
      <img src={img} />
    </div>
  );
}

export default App;
