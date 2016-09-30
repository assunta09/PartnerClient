import React from 'react';
import './styles.css';
import BubbleGraphDescContainer from './BubbleGraphDescContainer.js';

var BubbleSegment = React.createClass({

  render() {
    return (
      <div className='BubbleSegment'>
      	<div className="RevAndExpBubSeg">
	      	<div className="RevenueBubbleSeg">
	      	</div>
	      	<div className="ExpenseBubbleSeg">
	      	</div>
      	</div>
        <BubbleGraphDescContainer reports={this.props.reports}/>
      </div>
    );
  }
});

export default BubbleSegment;
