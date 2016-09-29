import React from 'react'
import './styles.css'

var Description = React.createClass ({
	getInitialState: function() {
		return {data: {}}
	},

	componentWillReceiveProps: function(nextProps) {
    var report = nextProps.reports
    if (nextProps) {
    	this.setState({data: report.reports.generalRevenueAbsolutes});
    }
  },

	render () {
		return (
			<div className="Description">
				<table className='ExpenseTable'>
					<tr><i className="material-icons li2">label</i><td>{`Contributions`}</td><td className='eAmount'>{`$${this.state.data.contribution}`}</td></tr>
					<tr><i className="material-icons li4">label</i><td>{`Service Revenue`}</td><td className='eAmount'>{`$${this.state.data.service_revenue}`}</td></tr>
				  <tr><i className="material-icons li1">label</i><td>{`Investments`}</td><td className='eAmount'>{`$${this.state.data.investments}`}</td></tr>
          <tr><i className="material-icons li3">label</i><td>{`Other`}</td><td className='eAmount'>{`$${this.state.data.other}`}</td></tr>
          <tr><i className="material-icons li6">label</i><td className='ExpTotal'>{`Total`}</td><td className='ExpTotal eAmount'>{`$${this.state.data.total}`}</td></tr>
        </table>
			</div>
		);
	}
});

export default Description;
