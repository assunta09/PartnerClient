import React, { Component } from 'react';
import './styles.css';
import ExpenseSegment from './Components/ExpenseSegment/ExpenseSegment.js';
import { connect } from 'react-redux';



class ReportsContainer extends Component {
  render() {
    return (
      <div>
        <ExpenseSegment />
      </div>
    );
  }
}

export default ReportsContainer;
