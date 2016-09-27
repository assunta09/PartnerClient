import React from 'react'
import DescTitle from './DescTitleContainer.js'
import Graph from './ExpenseGraphContainer.js'

var GraphDescContainer = React.createClass({

	render () {

		return (
			<div className='GraphDescContainer'>
        <DescTitle reports={this.props.reports}/>
        <Graph reports={this.props.reports}/>
			</div>
		);
	}
});


export default GraphDescContainer;
