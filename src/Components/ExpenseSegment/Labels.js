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
          <div><i className="material-icons li2">fiber_manual_record</i>Member Benefits</div>
          <div><i className="material-icons li4">fiber_manual_record</i>Fundraising</div>
          <div><i className="material-icons li1">fiber_manual_record</i>Grants</div>
          <div><i className="material-icons li3">fiber_manual_record</i>Salaries</div>
          <div><i className="material-icons li5">fiber_manual_record</i>Other</div>
      </div>
		);
	}
});


export default Labels;
