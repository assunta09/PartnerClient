import React from 'react';
import './styles.css';
import NavBar from '../NavBar/NavBar.js';
import Pie from '../GraphContainer/PieChart.js';
import Doughnut from '../GraphContainer/DoughnutChart.js';

var ImpactSegment = React.createClass ({
	getInitialState: function() {
    return {
      data: {},
      impactScore: 50
    };
  },

  componentWillMount: function() {
		return fetch('https://partner-api.herokuapp.com/organisations/1')
      .then((response) => response.json())
      .then((Data) => {
      	var impact = (Data.impactScore)
      	this.setState({data: Data, impactScore:impact});
      })
      .catch((error) => {
        console.error(error);
      });
  },

	render () {
		return (
			<div>
				<NavBar />
        {console.log(this.state.impactScore)}
        <Doughnut impact={this.state.impactScore}/>
			</div>
		);
	}
});

export default ImpactSegment
