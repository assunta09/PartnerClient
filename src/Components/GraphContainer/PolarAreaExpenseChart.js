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
    var rev = reports.generalRevenueAbsolutes
    var service_rev = rev.service_revenue
    console.log(service_rev)
    var contribution = rev.contribution
    var investments = rev.investments
    var other = rev.other
    console.log(other)
    this.setState({
      chartData: {
        data: [
        {
          color: "#5B5B5B",
          highlight: "#5B5B5B",
          label: "Service",
          value: service_rev,
        },
        {
          color: "#9E9FFF",
          highlight: "#9E9FFF",
          label: "Investments",
          value: investments,
        },
        {
          color: "#9B9B9B",
          highlight: "#9B9B9B",
          label: "Contributions",
          value: contribution,
        },
        {
          color: "#5E5FFF",
          highlight: "#5E5FFF",
          label: "Other",
          value: other,
        }
      ]
    }
    });
  },
  render () {
    return <PolarAreaChart className="PolarChart" width="200" height="200" data={this.state.chartData.data} options={{responsive: true}}/>
  }
});

export default PolarArea
