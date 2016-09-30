// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';
const App = require('./App.js');
const React = require('react');
const ReactDOM = require('react-dom');

it('renders without crashing', () => {
  const div = ReactDOM.findDOMNode('root');
  ReactDOM.render(<App />, div);
});



