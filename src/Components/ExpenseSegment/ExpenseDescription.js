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
					<tr><i className="material-icons li2">label</i><td>{`Member Benefits`}</td><td className='eAmount'>{`$${this.state.data.member_benefits}`}</td></tr>
					<tr><i className="material-icons li4">label</i><td>{`Fundraising`}</td><td className='eAmount'>{`$${this.state.data.fundraising_fees}`}</td></tr>
				  <tr><i className="material-icons li1">label</i><td>{`Grants`}</td><td className='eAmount'>{`$${this.state.data.grant}`}</td></tr>
          <tr><i className="material-icons li3">label</i><td>{`Salaries`}</td><td className='eAmount'>{`$${this.state.data.salaries}`}</td></tr>
          <tr><i className="material-icons li5">label</i><td>{`Other`}</td><td className='eAmount'>{`$${this.state.data.other_expenses}`}</td></tr>
          <tr><i className="material-icons li6">label</i><td className='ExpTotal'>{`Total`}</td><td className='ExpTotal eAmount'>{`$${this.state.data.total}`}</td></tr>
        </table>
			</div>
		);
	}
});

export default Description;
