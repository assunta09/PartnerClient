import React from 'react';
import GraphContainer from './BubbleGraphContainer.js';
// var GraphContainer = require('./BubbleGraphContainer.js');

var BubbleGraphDescContainer = React.createClass({

  render () {

    return (
      <div className='GraphDescContainer'>
        <GraphContainer reports={this.props.reports}/>
      </div>
    );
  }
});


export default BubbleGraphDescContainer;
