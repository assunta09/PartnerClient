import React from 'react';
var PieChart = require('react-chartjs').Pie;

var Pie = React.createClass ({
	
	getInitialState: function() {
		return {
			myData: [
				{
					color: "#F7464A",
					highlight: "#FF5A5E",
					label: "Red",
					value: 44.83
				},
				{
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green",
					value: 51.42
				},
				{
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey",
					value: 80.03
				}
			]
		}
	},

	render () {
		return (
			<div>
				<p>yoo</p>
				<PieChart data={this.state.myData}/>
				{console.log(this.state.myData)}
				{console.log(this.props.obj)}
			</div>
		);
	}
});

export default Pie