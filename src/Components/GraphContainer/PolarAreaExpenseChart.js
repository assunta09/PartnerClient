import React from 'react';
import './styles.css';
var PolarAreaChart = require("react-chartjs").PolarArea;

var PolarArea = React.createClass({
  getInitialState () {
    return {
      chartData: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var data = nextProps.reports
    var reports = data.reports
    var rev = reports.generalRevenueAbsolutes
    var service_rev = rev.service_revenue
    var investments = rev.investments
    var other = rev.other
    this.setState({
      chartData: [
        {
          color: "#ACDFD2",
          highlight: "#ACDFD2",
          label: "Service",
          value: service_rev,
        },
        {
          color: "#DCDA98",
          highlight: "#DCDA98",
          label: "Investments",
          value: investments,
        },
        {
          color: "#F29885",
          highlight: "#F29885",
          label: "other",
          value: other,
        },
      ],
    });
  },
  render () {
    return <PolarAreaChart className="PolarChart" width="600" height="450" data={this.state.chartData}/>
  }
});

export default PolarArea
