import React from 'react';
import PolarArea from '../GraphContainer/PolarAreaChart.js';

var GraphContainer = React.createClass({

	render () {

		return (
			<div className='GraphContainer'>
				<PolarArea />
			</div>
		);
	}
});


export default GraphContainer;
