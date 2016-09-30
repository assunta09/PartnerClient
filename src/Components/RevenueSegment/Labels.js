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
          <div><i className="material-icons li2">fiber_manual_record</i>Contributions</div>
          <div><i className="material-icons li4">fiber_manual_record</i>Service Revenue</div>
          <div><i className="material-icons li1">fiber_manual_record</i>Investments</div>
          <div><i className="material-icons li3">fiber_manual_record</i>Other</div>
      </div>
		);
	}
});


export default Labels;
