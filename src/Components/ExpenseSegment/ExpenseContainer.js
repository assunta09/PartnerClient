import React, { Component } from 'react';
import '../../App.css';
import ExpenseSegment from './ExpenseSegment.js';

class ExpenseContainer extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseSegment reports={this.props.reports} sr={this.props.sr}/>
      </div>
    );
  }
}

export default ExpenseContainer;
