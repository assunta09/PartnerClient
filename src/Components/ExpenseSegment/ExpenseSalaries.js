import React from 'react'
import './styles.css'

var ExpenseSalaries = React.createClass ({
	getInitialState: function() {
		return {data: []}
	},

	componentWillReceiveProps: function(nextProps) {
    var report = nextProps.reports
    var topSal = report.reports.topSalaries
    console.log(topSal)
    var allTop
    if (topSal) {
    	allTop = topSal.map(function(pep) {
    		return (<tr><td><i className="material-icons group">person</i><td className='EmployeeName'>{pep.name}</td><td className='SalaryTD'>{pep.salary}</td><td className='SalaryPos'>{pep.title}</td></td></tr>)
    	});
    }
    this.setState({
    	data: allTop
    });
  },

	render () {
		return (
			<div className="Description">
				<table className='SalaryTable'>
          <tbody>
          	{console.log(this.state.data)}
   					{
   						this.state.data.map(function(pep) {
   							return pep
   						})
   					}
          </tbody>
        </table>
			</div>
		);
	}
});

export default ExpenseSalaries;
