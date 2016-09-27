import React from 'react';
import './styles.css';
import ArticleContainer from '../ArticleSegment/ArticleContainer.js'

var ArticleSegment = React.createClass({

  render() {
    return (
      <div className='ArticleSegment'>
      <h1>This is the article segment</h1>
      </div>
    );
  }
});

export default ArticleSegment;
