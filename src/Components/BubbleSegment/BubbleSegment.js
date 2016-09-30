import React from 'react';
import './styles.css';
import BubbleGraphDescContainer from './BubbleGraphDescContainer.js';

var BubbleSegment = React.createClass({

  render() {
    return (
      <div className='BubbleSegment'>
      	<div className="RevAndExpBubSeg">
	      	<div className="RevenueBubbleSeg">
	      		<div className="RevsLabel">
	      			<h2>Revenue</h2>
	      		</div>
	      	</div>
	      	<div className="ExpenseBubbleSeg">
	      	  <div className="ExpsLabel">
	      			<h2>Expense</h2>
	      		</div>
	      	</div>
      	</div>
        <BubbleGraphDescContainer reports={this.props.reports}/>
      </div>
    );
  }
});

export default BubbleSegment;
