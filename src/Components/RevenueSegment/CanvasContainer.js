import React, { Component } from 'react';
import '../../App.css';
import Graph from './RevenueGraphContainer.js'
import Labels from './Labels.js';

class CanvasContainer extends Component {
  render() {
    return (
      <div className="CanvasContainer">
        <h2 className='RGraphTitle'>Revenue Breakdown</h2>
        <Graph reports={this.props.reports}/>
        <Labels reports={this.props.reports}/>
      </div>
    );
  }
}

export default CanvasContainer;
