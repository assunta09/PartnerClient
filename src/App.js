import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import HeroSegment from './Components/HeroSegment/HeroSegment.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSegment />
        {this.props.children}
      </div>
    );
  }
}

export default App;
