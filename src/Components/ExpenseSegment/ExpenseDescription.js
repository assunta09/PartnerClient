import React from 'react'
import './styles.css'

var Description = React.createClass ({
	getInitialState: function() {
		return {data: {}}
	},

	componentWillReceiveProps: function(nextProps) {
    var report = nextProps.reports
    if (nextProps) {
    	this.setState({data: report.reports.generalExpensesAbsolutes});
    }
  },

	render () {
		return (
			<div className="Description">
				<table className='ExpenseTable'>
          <tr><i className="material-icons li1">network_cell</i><td>{`Grants`}</td><td>{`$${this.state.data.grants}`}</td></tr>
          <tr><i className="material-icons li2">network_cell</i><td>{`Member Benefits`}</td><td>{`$${this.state.data.member_benefits}`}</td></tr>
          <tr><i className="material-icons li3">network_cell</i><td>{`Salaries`}</td><td>{`$${this.state.data.salaries}`}</td></tr>
          <tr><i className="material-icons li4">network_cell</i><td>{`Fundraising`}</td><td>{`$${this.state.data.fundraising_fees}`}</td></tr>
          <tr><i className="material-icons li5">network_cell</i><td>{`Other`}</td><td>{`$${this.state.data.other}`}</td></tr>
        </table>
			</div>
		);
	}
});

export default Description;
