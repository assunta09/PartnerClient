import React from 'react';
import './styles.css';
var PolarAreaChart = require("react-chartjs").PolarArea;

var PolarArea = React.createClass({
  getInitialState () {
    return {
      chartData: []
    }
  },

  componentWillMount: function() {
    return fetch('https://partner-api.herokuapp.com/organisations/2')
      .then((response) => response.json())
      .then((Data) => {
        // console.log(Data)
        var expenses = (Data.generalExpensesOverview)
        this.setState({
          chartData: [
            {
              color: "#ACDFD2",
              highlight: "#ACDFD2",
              label: "Salaries",
              value: (expenses.salaries * 100),
            },
            {
              color: "#DCDA98",
              highlight: "#DCDA98",
              label: "Other",
              value: (expenses.other * 100),
            },
            {
              color: "#F29885",
              highlight: "#F29885",
              label: "Fundraising",
              value: (expenses.fundraising_fees * 100),
            },
          ],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  render () {
    return <PolarAreaChart className="PolarChart" width="600" height="450" data={this.state.chartData} />
  }
});

export default PolarArea
