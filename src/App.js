import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import HeroSegment from './Components/HeroSegment/HeroSegment.js';
import ExpenseSegment from './Components/ExpenseSegment/ExpenseSegment.js';
import ArticleSegment from './Components/ArticleSegment/ArticleSegment.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSegment />
        <StickyContainer>
          <ExpenseSegment />
          <ArticleSegment />
        </StickyContainer>
	      {console.log(this.props)}
      </div>
    );
  }
}

export default App;
