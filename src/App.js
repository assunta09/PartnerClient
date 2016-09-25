import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import HeroSegment from './Components/HeroSegment/HeroSegment.js';
import ContentContainer from './Components/ContentContainer/ContentContainer.js';
import ArticleContainer from './Components/ArticleSegment/ArticleSegment.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSegment />
        <StickyContainer>
          <ContentContainer />
          <ArticleContainer />
        </StickyContainer>
	      {console.log(this.props)}
      </div>
    );
  }
}

export default App;
