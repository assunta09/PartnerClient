import React from 'react';
import './styles.css';
import ArticleContainer from '../ArticleSegment/ArticleContainer.js'

var ArticleSegment = React.createClass({

  render() {
    return (
      <div className='ArticleSegment'>
        <ArticleContainer />
      </div>
    );
  }
});

export default ArticleSegment;
