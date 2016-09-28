import React from 'react';
import './styles.css';
import GraphDesc from './GraphDescContainer.js'



var RevenueSegment = React.createClass ({
  render() {
    return (
    	<div className='RevenueSegment1'>
        <GraphDesc reports={this.props.reports} sr={this.props.sr}/>
    	</div>
    );
  }
});

export default RevenueSegment;
