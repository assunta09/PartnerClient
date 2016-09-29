import React from 'react';
import PolarArea from '../GraphContainer/PolarAreaChartExpense.js';

var ExpenseGraphContainer = React.createClass({

	render () {

		return (
			<div className='GraphContainer2' id="graphcontainer">
				<PolarArea reports={this.props.reports}/>
			</div>
		);
	}
});


export default ExpenseGraphContainer;
