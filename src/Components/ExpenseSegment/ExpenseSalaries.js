import React from 'react'
import './styles.css'

var ExpenseSalaries = React.createClass ({
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
				<table className='SalaryTable'>
          <tbody>
            <tr><td><i className="material-icons group">person</i><td className='EmployeeName'>{`Salary`}</td><td className='SalaryTD'>{`$${this.state.data.grants}`}</td></td></tr>
            <tr><td><i className="material-icons group">person</i><td className='EmployeeName'>{`Salary`}</td><td className='SalaryTD'>{`$${this.state.data.member_benefits}`}</td></td></tr>
            <tr><td><i className="material-icons group">person</i><td className='EmployeeName'>{`Salary`}</td><td className='SalaryTD'>{`$${this.state.data.salaries}`}</td></td></tr>
          </tbody>
        </table>
			</div>
		);
	}
});

export default ExpenseSalaries;
