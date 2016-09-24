import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSegment from './Components/HeroSegment/HeroSegment.js';
import ContentContainer from './Components/ContentContainer/ContentContainer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSegment />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
