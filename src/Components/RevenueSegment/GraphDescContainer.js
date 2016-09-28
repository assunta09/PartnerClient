import React from 'react'
import DescTitle from './DescTitleContainer.js'
import Graph from './RevenueGraphContainer.js'

var GraphDescContainer = React.createClass({
	componentDidMount: function () {
    const config = {
      origin: 'right',
      duration: 700,
      delay: 200,
      distance: '50px',
      scale: 1,
      easing: 'ease',

    }

    const config2 = {
      origin: 'left',
      duration: 700,
      delay: 200,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      
    }
    
    this.props.sr.reveal(this.refs.box1, config)
    this.props.sr.reveal(this.refs.box2, config2)
  },
	render () {
		return (
			<div className='GraphDescContainer1'>
        <div ref='box1' className="scrollbox">
        	<DescTitle/>
        </div>
        <div ref='box2' className="scrollbox">
        	<Graph reports={this.props.reports}/>
        </div>
			</div>
		);
	}
});


export default GraphDescContainer;
