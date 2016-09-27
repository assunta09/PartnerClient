import React from 'react';
// import bubbleChart from './bubble_chart.js';
// import bubbleHelper from './bubble_helpers.js';
// import floatingTooltip from './tooltip.js';

var bubbleChart = require('./bubble_chart.js');
// var bubbleHelper = require('./bubble_helpers.js');

var GraphContainer = React.createClass({


  render () {

    return (
      <div className='BubbleGraphContainer'>
        <bubbleChart />
      </div>
    );
  }
});


export default GraphContainer;
