import React from 'react';
import './styles.css';
var PolarAreaChart = require("react-chartjs").Doughnut;

var PolarArea = React.createClass({
  getInitialState () {
    return {
      chartData: [],
      height: 300,
      width: 300
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var data = nextProps.reports
    var reports = data.reports
    var expense = reports.generalExpensesAbsolutes
    var grants = expense.grant
    var member = expense.member_benefits
    var salaries = expense.salaries
    var fundraising = expense.fundraising_fees
    var other = expense.other_expenses
    this.setState({
      chartData: [
        {
          color: "#ACDFD2",
          highlight: "#ACDFD2",
          label: "Grants",
          value: grants,
        },
        {
          color: "#DCDA98",
          highlight: "#DCDA98",
          label: "Member Fees",
          value: member,
        },
        {
          color: "#F29885",
          highlight: "#F29885",
          label: "Salaries",
          value: salaries,
        },
        {
          color: "#F27A63",
          highlight: "#F27A63",
          label: "Fundrasing",
          value: fundraising,
        },
        {
          color: "#A4A8A4",
          highlight: "#A4A8A4",
          label: "Other",
          value: other,
        },
      ],
    });
  },

  render () {
    return (
      <div>
        <PolarAreaChart className="PolarChart" width='200' height='200' data={this.state.chartData} options={{responsive: true}}/>
      </div>
    )
  }
});

export default PolarArea
