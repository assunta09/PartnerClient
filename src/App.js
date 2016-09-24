import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSegment from './Components/HeroSegment/HeroSegment.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSegment />
	      {console.log(this.props)}
      </div>
    );
  }
}

export default App;

