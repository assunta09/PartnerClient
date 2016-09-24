import React from 'react';
import './styles.css';
import NavBar from '../NavBar/NavBar.js';
import PieChart from '../GraphContainer/Graph.js';

var ImpactSegment = React.createClass ({
	getInitialState: function() {
    return {
      data: {},
    };
  },

  componentDidMount: function() {
		return fetch('https://partner-api.herokuapp.com/organisations/1')
      .then((response) => response.json())
      .then((Data) => {
      	console.log(Data)
      	this.setState({data: Data});
      })
      .catch((error) => {
        console.error(error);
      });
  },

	render () {
		return (
			<div>
				<NavBar />
				<PieChart />
			</div>
		);
	}
});

export default ImpactSegment