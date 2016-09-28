import React, { Component } from 'react';
import '../../App.css';
import RevenueSegment from './RevenueSegment.js';

class RevenueContainer extends Component {
  render() {
    return (
      <div className="App">
        <RevenueSegment reports={this.props.reports} sr={this.props.sr}/>
      </div>
    );
  }
}

export default RevenueContainer;
