import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import '../../App.css';
import RevenueSegment from './RevenueSegment.js';
import ExpenseSegment from '../ExpenseSegment/ExpenseSegment.js';


class RevenueContainer extends Component {
  render() {
    return (
      <div className="App">
        <StickyContainer>
          <ExpenseSegment />
          <RevenueSegment />
        </StickyContainer>
      </div>
    );
  }
}

export default RevenueContainer;
