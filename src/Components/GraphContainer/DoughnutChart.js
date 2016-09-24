import React from 'react';
var DoughnutChart = require("react-chartjs").Doughnut;

var Doughnut = React.createClass ({
		
	getInitialState: function() {
		return {
			myData: [
					{
						color: "#F7464A",
						highlight: "#FF5A5E",
						label: "Impact Score",
						value: this.props.impact
					},
				],
			}
	},

	// componentDidMount: function() {
	//   console.log(this.props.impact)
	//   this.setState({
	//     myData: [
	// 				{
	// 					color: "#F7464A",
	// 					highlight: "#FF5A5E",
	// 					label: "Impact Score",
	// 					value: this.props.impact
	// 				},
	// 			],
	//   });
	// },

	render() {
		return (
			<div>
				{console.log("this" + this.props.impact)}
				<DoughnutChart data={this.state.myData}/>
			</div>
		);
	}
});


export default Doughnut