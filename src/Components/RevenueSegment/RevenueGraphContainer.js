import React from 'react';
import PolarArea from '../GraphContainer/PolarAreaExpenseChart.js';

var GraphContainer = React.createClass({

	render () {
		return (
			<div className='GraphContainer1'>
				<PolarArea reports={this.props.reports}/>
			</div>
		);
	}
});


export default GraphContainer;
