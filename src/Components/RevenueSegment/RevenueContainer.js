import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import '../../App.css';
import RevenueSegment from './RevenueSegment.js';

class RevenueContainer extends Component {
  render() {
    return (
      <div className="App">
          <RevenueSegment />
      </div>
    );
  }
}

export default RevenueContainer;
