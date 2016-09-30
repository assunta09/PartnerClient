import React from 'react';
import './styles.css';
import BubbleGraphDescContainer from './BubbleGraphDescContainer.js';

var BubbleSegment = React.createClass({

  render() {
    return (
      <div className='BubbleSegment'>
        <BubbleGraphDescContainer reports={this.props.reports}/>
      </div>
    );
  }
});

export default BubbleSegment;
