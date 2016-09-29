import React from 'react';
import './styles.css';
var PolarAreaChart = require("react-chartjs").PolarArea;

var PolarAreaChartExpense = React.createClass({
  getInitialState () {
    return {
      chartData: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    console.log("yo")
    var data = nextProps.reports
    var reports = data.reports
    var expense = reports.generalExpensesAbsolutes
    var grants = expense.grants
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
        <PolarAreaChart className="PolarChart" width="600" height="450" data={this.state.chartData} />
      </div>
    )
  }
});

export default PolarAreaChartExpense
