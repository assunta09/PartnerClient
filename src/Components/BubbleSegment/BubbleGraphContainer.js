import React from 'react';
import bubbleChart from './bubble_chart.js';
import bubbleHelper from './bubble_helpers.js';
import floatingTooltip from './tooltip.js';

var GraphContainer = React.createClass({

  bubbleHelper.setupButtons();

  getInitialState: function() {
    return {data: {}}
  },


  render () {

    return (
      <div className='BubbleGraphContainer'>
        <bubbleChart />
      </div>
    );
  }
});


export default GraphContainer;
