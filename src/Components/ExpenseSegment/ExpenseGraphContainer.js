import React from 'react';
import PolarArea from '../GraphContainer/PolarAreaChart.js';

var GraphContainer = React.createClass({

	render () {

		return (
			<div className='GraphContainer2'>
				<PolarArea reports={this.props.reports}/>
			</div>
		);
	}
});


export default GraphContainer;
