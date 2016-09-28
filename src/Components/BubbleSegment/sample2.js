import React from 'react';
import ReactDOM from 'react-dom';
// var d3Chart = require('./d3Chart');
import d3Chart from './d3Chart.js';

var sampleData = [
  {id: '5fbmzmtc', x: 75, y: 10, z: 16},
  {id: 's4f8phwm', x: 26, y: 15, z: 9},
  {id: 's4f8phwm', x: 50, y: 30, z: 19},
  {id: 's4f8phwm', x: 100, y: 40, z: 20}, 
  {id: 's4f8phwm', x: 60, y: 25, z: 26},
];

var domain: {x: [0,30], y: [0,100]};

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: sampleData,
      domain: domain
    };
  },

  // componentWillUnmount: function() {
  //   var el = ReactDOM.findDOMNode(this);
  //   d3Chart.destroy(el);
  // },

  render: function() {
    return (
      <div className="Chart">
        {this.props.data}
        {this.props.domain}
      </div>
    );
  }
});

export default Chart;
