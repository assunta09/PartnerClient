import React from 'react';
import './styles.css';
import NavBar from '../NavBar/NavBar.js'
import GraphDesc from './GraphDescContainer.js'



var RevenueSegment = React.createClass ({
  render() {
    return (
    	<div className='RevenueSegment1'>
        <GraphDesc />
    	</div>
    );
  }
});

export default RevenueSegment;
