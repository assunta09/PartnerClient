import React from 'react';
import './styles.css';

import GraphDesc from './GraphDescContainer.js'


var ExpenseSegment = React.createClass ({
  render() {
    return (
    	<div className='ExpenseSegment'>
        <GraphDesc reports={this.props.reports} sr={this.props.sr}/>
    	</div>
    );
  }
});

export default ExpenseSegment;
