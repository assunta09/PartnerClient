// THis is just a notes file
// We won't use this 


// This is the 2nd sample chart 


var d3 = require('d3');

var d3Chart = {

create: function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
},

update: function(el, state) {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
},

destroy: function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
},

_scales: function(el, domain) {
  if (!domain) {
    return null;
  }
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  // console.log(d3);
  var x = d3.scaleLinear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scaleLinear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scaleLinear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
},

// var circle = svg.selectAll("circle");
// circle.data([500,57,112,200,600,1000]).enter().append("circle");


_drawPoints: function(el, scales, data) {
  // console.log(el);
  //   var sampleData = [
  //   {id: '5fbmzmtc', x: 178, y: 20, z: 6},
  //   {id: 's4f8phwm', x: 210, y: 10, z: 9},
  //   {id: 's4f8phwm', x: 20, y: 50, z: 10},
  //   {id: 's4f8phwm', x: 100, y: 10, z: 25}
  // ];

  var g = d3.select(el).selectAll('.d3-points')
  .attr('width', '100%')
  .attr('height', '100%');

  var point = g.selectAll('.d3-point')
    .data(data)
    .enter()
    .append("svg:circle")
    .attr('class', 'nodes')
    .attr('cx', function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.z; })
    .attr("fill", "grey");
  // console.log(point);
  // ENTER
  // point.enter().append('circle')
  //     .attr('class', 'd3-point')

  // var circle = point.selectAll('.d3-point').data(sampleData).append(sampleData);

  // // console.log(point);  
  // // ENTER & UPDATE
  // circle.attr('cx', function(d) { return scales.x(d.x); })
  //     .attr('cy', function(d) { return scales.y(d.y); })
  //     .attr('r', function(d) { return scales.z(d.z); })

  // EXIT
  point.exit()
      .remove()
  }
};

export default d3Chart;

