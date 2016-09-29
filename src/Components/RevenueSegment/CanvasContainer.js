import React, { Component } from 'react';
import '../../App.css';
import Graph from './RevenueGraphContainer.js'

class CanvasContainer extends Component {
  render() {
    return (
      <div className="CanvasContainer">
        <Graph reports={this.props.reports}/>
      </div>
    );
  }
}

export default CanvasContainer;
