import React from 'react'
import DescTitle from './DescTitleContainer.js'
import Graph from './RevenueGraphContainer.js'

var GraphDescContainer = React.createClass({

	render () {

		return (
			<div className='GraphDescContainer1'>
        <DescTitle />
        <Graph />
			</div>
		);
	}
});


export default GraphDescContainer;
