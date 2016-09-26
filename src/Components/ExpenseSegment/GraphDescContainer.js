import React from 'react'
import DescTitle from './DescTitleContainer.js'
import Graph from './ExpenseGraphContainer.js'

var GraphDescContainer = React.createClass({

	render () {

		return (
			<div className='GraphDescContainer'>
        <DescTitle />
        <Graph />
			</div>
		);
	}
});


export default GraphDescContainer;
