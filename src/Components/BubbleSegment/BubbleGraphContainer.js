import React from 'react';
// import d3 from 'd3';
import d3 from '../../../public/js/d3-min.js';
import ReactDOM from 'react-dom';
// var data = require('./gates_money.csv');

// Tooltip module 

function floatingTooltip(tooltipId, width) {
  
  // var div = d3.select("body").append("div") 
  //   .attr("class", "tooltip")       
  //   .style("opacity", 0);


  var tt = d3.select('svg')
    .append('div')
    .attr('class', 'tooltip')
    .attr('id', tooltipId)
    .style('pointer-events', 'none');
  // Set a width if it is provided.
  if (width) {
    tt.style('width', width);
  }
  // console.log(tt);
  // Initially it is hidden.
  hideTooltip();

  // Tooltip module 

  function showTooltip(content, event) {
    // var node = ReactDOM.findDOMNode('.BubbleGraphContainer');
    // console.log()
    tt.style('opacity', 1.0)
      .append(content);
  
    updatePosition(event);
  }

  /*
   * Hide the tooltip div.
   */
  function hideTooltip() {
    tt.style('opacity', 0.0);
  }

  /*
   * Figure out where to place the tooltip
   * based on d3 mouse event.
   */
  function updatePosition(event) {
    // console.log("update")
    var xOffset = 20;
    var yOffset = 10;

    var ttw = tt.style('width');
    var tth = tt.style('height');

    var wscrY = window.scrollY;
    var wscrX = window.scrollX;

    var curX = (document.all) ? event.clientX + wscrX : event.pageX;
    var curY = (document.all) ? event.clientY + wscrY : event.pageY;
    var ttleft = ((curX - wscrX + xOffset * 2 + ttw) > window.innerWidth) ?
                 curX - ttw - xOffset * 2 : curX + xOffset;

    if (ttleft < wscrX + xOffset) {
      ttleft = wscrX + xOffset;
    }

    var tttop = ((curY - wscrY + yOffset * 2 + tth) > window.innerHeight) ?
                curY - tth - yOffset * 2 : curY + yOffset;

    if (tttop < wscrY + yOffset) {
      tttop = curY + yOffset;
    }

    tt.style({ top: tttop + 'px', left: ttleft + 'px' });
  }

  return {
    showTooltip: showTooltip,
    hideTooltip: hideTooltip,
    updatePosition: updatePosition
  };
}

// Bubblechart

function bubbleChart() {
  // Constants for sizing
  var width = 940;
  var height = 600;

  // tooltip for mouseover functionality
  var tooltip = floatingTooltip('tooltip', 240);

  // Locations to move bubbles towards, depending
  // on which view mode is selected.
  var center = { x: width / 2, y: height / 3 };

  var groupCenters = {
    2: { x: width / 3, y: height / 3 },
    1: { x: 2 * width / 3, y: height / 3 }
    // 3: { x: 2 * width / 3, y: height / 2 }
  };

  // X locations of the group titles.
  var groupsTitleX = {
    Revenues: 250,
    Expenses: width - 250
  };

  // Used when setting up force and
  // moving around nodes
  var damper = 0.102;

  // These will be set in create_nodes and create_vis
  var svg = null;
  var bubbles = null;
  var nodes = [];

  
  // Dividing by 8 scales down the charge to be
  // appropriate for the visualization dimensions.
  function charge(d) {
    return -Math.pow(d.radius, 2.0) / 9;
  }

  // Here we create a force layout and
  // configure it to use the charge function

  var force = d3.layout.force()
    .size([width, height])
    .charge(charge)
    .gravity(-0.01)
    .friction(.95);


  // Nice looking colors - no reason to buck the trend
  var fillColor = d3.scale.ordinal()
    .domain(['low', 'medium', 'high'])
    .range(['#5E5FFF', '#5B5B5B', '#7aa25c']);

  // Sizes bubbles based on their area instead of raw radius
  var radiusScale = d3.scale.pow()
    .exponent(0.5)
    .range([2, 85]);

 // Available groups: Revenues, Expenses, Grants 
  function createNodes(rawData) {

    var myNodes = rawData.map(function (d) {
      return {
        id: d.id,
        radius: radiusScale(+d.total_amount),
        value: d.total_amount,
        name: d._title,
        group: d.group,
        group_coef: d.group_coef,
        x: Math.random() * 900,
        y: Math.random() * 800
      };
    });

    // sort them to prevent occlusion of smaller nodes.
    myNodes.sort(function (a, b) { return b.value - a.value; });

    return myNodes;
  }

// Main entry point to chart 

  var chart = function chart(selector, rawData) {
    // Use the max total_amount in the data as the max in the scale's domain
    // note we have to ensure the total_amount is a number by converting it
    // with `+`.
    var maxAmount = d3.max(rawData, function (d) { return +d.total_amount; });
    radiusScale.domain([0, maxAmount]);

    nodes = createNodes(rawData);
    // Set the force's nodes to our newly created nodes array.
    force.nodes(nodes);

    // Create a SVG element inside the provided selector
    // with desired size.
    svg = d3.select(selector)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Bind nodes data to what will become DOM elements to represent them.
    bubbles = svg.selectAll('.bubble')
      .data(nodes, function (d) { return d.id; });

    // Create new circle elements each with class `bubble`.
    // There will be one circle.bubble for each object in the nodes array.
    // Initially, their radius (r attribute) will be 0.
    bubbles.enter().append('circle')
      .classed('bubble', true)
      .attr('r', 0)
      .attr('fill', function (d) { return fillColor(d.group); })
      .attr('stroke', function (d) { return d3.rgb(fillColor(d.group)).darker(); })
      .attr('stroke-width', 2)
      .on('mouseover', showDetail)
      .on('mouseout', hideDetail);
    // Fancy transition to make bubbles appear, ending with the
    // correct radius
    bubbles.transition()
      .duration(2000)
      .attr('r', function (d) { return d.radius; });

    // Set initial layout to single group.
    groupBubbles();
  };

  /*
   * Sets visualization in "single group mode".
   * The group labels are hidden and the force layout
   * tick function is set to move all nodes to the
   * center of the visualization.
   */
  function groupBubbles() {
    hideGroups();

    force.on('tick', function (e) {
      bubbles.each(moveToCenter(e.alpha))
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; });
    });

    force.start();
  }

  // Helper method to move bubbles to center of the page 

  function moveToCenter(alpha) {
    return function (d) {
      d.x = d.x + (center.x - d.x) * damper * alpha;
      d.y = d.y + (center.y - d.y) * damper * alpha;
    };
  }

  /*
   * Sets visualization in "split by group mode".
   */

  function splitBubbles() {
    showGroups();

    force.on('tick', function (e) {
      bubbles.each(moveToGroups(e.alpha))
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; });
    });

    force.start();
  }

// Helper for moving bubbles to respective groups 

  function moveToGroups(alpha) {
    return function (d) {     
      var target = groupCenters[d.group_coef];
      d.x = d.x + (target.x - d.x) * damper * alpha * 1.1;
      d.y = d.y + (target.y - d.y) * damper * alpha * 1.1;
    };
  }

  /*
   * Hides group title displays.
   */
  function hideGroups() {
    svg.selectAll('.group').remove();
  }

  /*
   * Shows group title displays.
   */
  function showGroups() {
    // Another way to do this would be to create
    // the group texts once and then just hide them.
    var groupsData = d3.keys(groupsTitleX);
    var years = svg.selectAll('.group')
      .data(groupsData);

    years.enter().append('text')
      .attr('class', 'group')
      .attr('x', function (d) { return groupsTitleX[d]; })
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text(function (d) { return d; });
  }

  /*
   * Function called on mouseover to display the
   * details of a bubble in the tooltip.
   */
  function showDetail(d) {
    
    d3.select(this).attr('stroke', 'black');
    // console.log('hit');
    // React.createElement("div", { "class": "tooltip", id: "gates_tooltip", style: "pointer-events: none; opacity: 0; top: 624px; left: 689px;" });
    var content = React.createElement("div", {class: "name"}, d.name + " " + d.value + " " + d.group);

    // var content = '<span class="name">Title: </span><span class="value">' +
    //               d.name +
    //               '</span><br/>' +
    //               '<span class="name">Amount: </span><span class="value">$' +
    //               d.value +
    //               '</span><br/>' +
    //               '<span class="name">group: </span><span class="value">' +
    //               d.group +
    //               '</span>';
    
   tooltip.showTooltip(content, d3.event);

  }

  /*
   * Hides tooltip
   */
  function hideDetail(d) {
    // reset outline
    d3.select(this)
      .attr('stroke', d3.rgb(fillColor(d.group)).darker());

    tooltip.hideTooltip();
  }

  /*
   Toggle display for splitting and grouping bubbles 
   */
  chart.toggleDisplay = function (displayName) {
    if (displayName === 'group') {
      splitBubbles();
    } else {
      groupBubbles();
    }
  };


  // return the chart function from closure.
  return chart;
}

//Setup functions for rendering the buttons  

function setupButtons() {
  var node = ReactDOM.findDOMNode('.BubbleGraphContainer');
  d3.select(node)
    .selectAll('.button')
    .on('click', function () {
      // Remove active class from all buttons
      d3.selectAll('.button').classed('active', false);
      // Find the button just clicked
      var button = d3.select(this);

      // Set it as the active button
      button.classed('active', true);

      // Get the id of the button
      var buttonId = button.attr('id');

      // Toggle the bubble chart based on
      // the currently clicked button.
      toggleDisplay(buttonId);
    });
}

/*
 * Helper function to convert a number into a string
 * and add commas to it to improve presentation.
 */
// function addCommas(nStr) {
//   nStr += '';
//   var x = nStr.split('.');
//   var x1 = x[0];
//   var x2 = x.length > 1 ? '.' + x[1] : '';
//   var rgx = /(\d+)(\d{3})/;
//   while (rgx.test(x1)) {
//     x1 = x1.replace(rgx, '$1' + ',' + '$2');
//   }

//   return x1 + x2;
// }

// Helper method for parsing the data from the API into a workable format 
// for node creation 

function parseData(theData) { 

  var newData = []; 
  var expenseKeys = Object.keys(theData[0]); 
  var revenueKeys = Object.keys(theData[1]);
  var expenseValues = Object.keys(theData[0]).map(k => theData[0][k]);
  var revenueValues = Object.keys(theData[1]).map(k => theData[1][k]);

  for (var i = 0; i < expenseKeys.length; i++) {
    newData.push({
    id: i,
    total_amount: expenseValues[i],
    _title: expenseKeys[i], 
    group: "expenses", 
    group_coef: 1
    })
  }
  
  var cont = expenseKeys.length;
  
  for (var k = 0; k < revenueKeys.length; k++) {
    newData.push({
    id: k + cont,
    total_amount: revenueValues[k],
    _title: revenueKeys[k], 
    group: "revenues", 
    group_coef: 2
    })
  }
  // console.log(newData);

  return newData;
};


// Sample data 

//  var rawData = [ 
//    {id: 1, total_amount: 5000, _title: "Hey", group: "somegroup", group_coef: 1 },
//    {id: 2, total_amount: 20000, _title: "A", group: "secondgroup", group_coef: 2 },
//    {id: 3, total_amount: 50000, _title: "B", group: "thirdgroup", group_coef: 3},
//    {id: 4, total_amount: 500000, _title: "C", group: "somegroup", group_coef: 1},
//    {id: 5, total_amount: 500, _title: "C", group: "secondgroup", group_coef: 1},
//    {id: 6, total_amount: 3000, _title: "C", group: "thirdgroup", group_coef: 3 },
//    {id: 7, total_amount: 800000, _title: "C", group: "somegroup", group_coef: 2 },
//    {id: 8, total_amount: 200000, _title: "C", group: "secondgroup", group_coef: 1 },
//    {id: 9, total_amount: 34353, _title: "C", group: "thirdgroup", group_coef: 3},
//    {id: 10, total_amount: 24545, _title: "C", group: "somegroup", group_coef: 3},
//    {id: 11, total_amount: 2003240, _title: "C", group: "secondgroup", group_coef: 2},
//    {id: 12, total_amount: 200234, _title: "C", group: "thirdgroup", group_coef: 3 },
//    {id: 13, total_amount: 2002342, _title: "C", group: "somegroup", group_coef: 2},
//    {id: 14, total_amount: 20, _title: "C", group: "secondgroup", group_coef: 3 },
//    {id: 15, total_amount: 59098, _title: "C", group: "thirdgroup", group_coef: 1},
//    {id: 16, total_amount: 207889, _title: "C", group: "somegroup", group_coef: 2 },
//    {id: 17, total_amount: 206776, _title: "C", group: "secondgroup", group_coef: 3 },
// ];

// Creation of chart instance 

var theChart = bubbleChart();

// Creation of GraphContainer component containing bubble chart 

var GraphContainer = React.createClass({

  componentWillReceiveProps: function(nextProps) {

    var data = nextProps.reports;
    var reports = data.reports;
    var el = ReactDOM.findDOMNode(this);
    var data2 = [reports.allExpenses, reports.allRevenues];
    var data3 = parseData(data2);
    var rawData = data3;
    theChart(el, rawData);
    // setupButtons();
  },

  handleClick: function(event) {
    theChart.toggleDisplay('group');
  },

  otherClick: function(event) { 
    theChart.toggleDisplay('all');
  },

  onMouseEnterHandler: function() {
    console.log('hover');
    theChart.showDetail('.bubble');
  },

  onMouseLeaveHandler: function() {
        
  },

  render () {
    return (
      <div className='BubbleGraphContainer' >
       <div id="toolbar">
          <button id="all" className="button active" onClick={this.otherClick} >Cumulative View</button>
          <button id="group" className="button" onClick={this.handleClick} >Separate View</button>
      </div>
      </div>
    );
  }
});

export default GraphContainer;
