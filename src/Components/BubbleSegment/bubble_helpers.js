
var bubbleHelper = { 
  
  var myBubbleChart = bubbleChart();

  /*
   * Function called once data is loaded from CSV.
   * Calls bubble chart function to display inside #vis div.
   */
   display: function(error, data) {
    if (error) {
      console.log(error);
    }

    myBubbleChart('#vis', data);
  }

  /*
   * Sets up the layout buttons to allow for toggling between view modes.
   */
   setupButtons: function() {
    d3.select('#toolbar')
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
        myBubbleChart.toggleDisplay(buttonId);
      });
  }

  /*
   * Helper function to convert a number into a string
   * and add commas to it to improve presentation.
   */
   addCommas: function(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    return x1 + x2;
  }

// You might need this to call load the data later on
  // Load the data.
  // d3.csv('data/gates_money.csv', display);

  // setup the buttons.
  // setupButtons();
  
