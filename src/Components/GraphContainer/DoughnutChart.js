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
						value: 0,
					},
				],
			}
	},

  componentWillMount: function() {
		return fetch('https://partner-api.herokuapp.com/organisations/1')
      .then((response) => response.json())
      .then((Data) => {
      	console.log(Data)
      	var impact = (Data.impactScore)
      	console.log(impact)
      	this.setState({
					myData: [
						{
							color: "#F7464A",
							highlight: "#FF5A5E",
							label: "Impact Score",
							value: impact,
						},
					],
      	});
      })
      .catch((error) => {
        console.error(error);
      });
  },

	render() {
		return (
			<div>
				{console.log(this.state.myData)}
				<DoughnutChart data={this.state.myData}/>
			</div>
		);
	}
});


export default Doughnut