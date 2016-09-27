import React from 'react';
var DoughnutChart = require("react-chartjs").Doughnut;

import { connect } from 'react-redux';

var Doughnut = React.createClass ({
	render() {
		return (
			<div>
				 <p> yo </p>
				{console.log(this.props)}
			</div>
		);
	}
});

export default Doughnut

