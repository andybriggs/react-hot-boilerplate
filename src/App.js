import React, { Component } from 'react';
import './style';
import img from './img/awesome.jpg';

const App = () => {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <h1>My New App!</h1>
      <img src={img} />
    </div>
  );
}

export default App;
