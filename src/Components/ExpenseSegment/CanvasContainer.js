import React, { Component } from 'react';
import '../../App.css';
import Graph from './ExpenseGraphContainer.js'
import Labels from './Labels.js';

class CanvasContainer extends Component {
  render() {
    return (
      <div className="ECanvasContainer">
        <h2 className='GraphTitle'>Expense Breakdown</h2>
        <Graph reports={this.props.reports}/>
        <Labels reports={this.props.reports}/>
      </div>
    );
  }
}

export default CanvasContainer;
