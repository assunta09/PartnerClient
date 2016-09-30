import React, { Component } from 'react';
import './App.css';
import HeroSegment from './Components/HeroSegment/HeroSegment.js';

var App = React.createClass({
  render() {
    return (
      <div className="App"> 
        <HeroSegment />
        {this.props.children}
      </div>
    );
  }
});
export default App;
