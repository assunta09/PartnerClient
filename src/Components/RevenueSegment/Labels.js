import React from 'react'

var Labels = React.createClass({
  getInitialState: function() {
    return {
      data: {}
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      data: nextProps.reports.reports.generalExpensesAbsolutes
    })

  },


	render () {
		return (
      <div className='LabelContainer'>
          <p>Contributions<i className="material-icons li2">fiber_manual_record</i></p>
          <p>Service Revenue<i className="material-icons li4">fiber_manual_record</i></p>
          <p>Investments<i className="material-icons li1">fiber_manual_record</i></p>
          <p>Other<i className="material-icons li3">fiber_manual_record</i></p>
      </div>
		);
	}
});


export default Labels;
