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
          <tr><i className="material-icons ">person</i><td className='EmployeeName'>{`Salary`}</td><td className='SalaryTD'>{`$${this.state.data.grants}`}</td></tr>
          <tr><i className="material-icons ">person</i><td className='EmployeeName'>{`Salary`}</td><td className='SalaryTD'>{`$${this.state.data.member_benefits}`}</td></tr>
          <tr><i className="material-icons ">person</i><td className='EmployeeName'>{`Salary`}</td><td className='SalaryTD'>{`$${this.state.data.salaries}`}</td></tr>
        </table>
			</div>
		);
	}
});

export default ExpenseSalaries;
