import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './styles.css';
import NavBar from '../NavBar/NavBar.js'
import GraphDesc from './GraphDescContainer.js'



var ExpenseSegment = React.createClass ({
  render() {
    return (
    	<div className='ExpenseSegment'>
        <Sticky>
          <NavBar />
        </Sticky>
        <GraphDesc />
    	</div>
    );
  }
});

export default ExpenseSegment;
