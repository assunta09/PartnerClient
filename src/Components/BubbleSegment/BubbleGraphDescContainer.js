import React from 'react';
import DescTitle from './DescTitle.js';
import GraphContainer from './BubbleGraphContainer.js';
// var GraphContainer = require('./BubbleGraphContainer.js');

var BubbleGraphDescContainer = React.createClass({

  render () {

    return (
      <div className='GraphDescContainer'>
        <DescTitle reports={this.props.reports}/>
        <GraphContainer reports={this.props.reports}/>
      </div>
    );
  }
});


export default BubbleGraphDescContainer;
