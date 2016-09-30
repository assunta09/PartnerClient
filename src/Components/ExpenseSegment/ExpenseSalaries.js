import React from 'react'
import './styles.css'

var ExpenseSalaries = React.createClass ({
	getInitialState: function() {
		return {data: []}
	},

	componentWillReceiveProps: function(nextProps) {
    var report = nextProps.reports
    var topSal = report.reports.topSalaries
    var allTop
    	console.log(topSal)
    if (topSal.length > 0) {
    	allTop = topSal.map(function(pep) {
    		return (
          <div className="SalariesContainer">
            <i className="material-icons group">person</i>
            <div className='EmployeeName'>{pep.name}</div>
            <div className='Salarydiv'>{pep.salary}</div>
          </div>
          )
    	});
    } else {
    	allTop = [(
          <div className="SalariesContainer">
            <i className="material-icons group">person</i>
            <div className='EmployeeName'>This section was not filled out</div>
          </div>
      )]
    }
    this.setState({
    	data: allTop
    });
  },

	render () {
		return (
			<div className="Description">
				{
					this.state.data.map(function(pep) {
						return pep
					})
				}
			</div>
		);
	}
});

export default ExpenseSalaries;
