import React from 'react';
import './styles.css';
var PolarAreaChart = require("react-chartjs").Doughnut;

var PolarArea = React.createClass({
  getInitialState () {
    return {
      chartData: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var data = nextProps.reports
    var reports = data.reports
    var exp = reports.generalExpensesAbsolutes
    var grant = exp.grant
    var member_benefits = exp.member_benefits
    var salaries = exp.salaries
    var fundraising = exp.fundraising_fees
    var other = exp.other_expenses
    this.setState({
      chartData: {
        data: [
        {
          color: "#9E9FFF",
          highlight: "#9E9FFF",
          label: "Grants",
          value: grant,
        },
        {
          color: "#9B9B9B",
          highlight: "#9B9B9B",
          label: "Member Benefits",
          value: member_benefits,
        },
        {
          color: "#5E5FFF",
          highlight: "#5E5FFF",
          label: "Salaries",
          value: salaries,
        },
        {
          color: "#5B5B5B",
          highlight: "#5B5B5B",
          label: "Fundrasing",
          value: fundraising,
        },
        {
          color: "#3C3CA3",
          highlight: "#3C3CA3",
          label: "Other",
          value: other,
        }
      ],
        label: 'Expense Breakdown'
      },
    });
  },
  render () {
    return <PolarAreaChart className="PolarChart" width="200" height="200" data={this.state.chartData.data} options={{responsive: true}}/>
  }
});

export default PolarArea
