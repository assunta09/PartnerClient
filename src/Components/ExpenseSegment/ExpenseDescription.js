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
				<ul>
          <li><i className="material-icons li1">network_cell</i>{`Grants $${this.state.data.grants}`}</li>
          <li><i className="material-icons li2">network_cell</i>{`Member Benefits $${this.state.data.member_benefits}`}</li>
          <li><i className="material-icons li3">network_cell</i>{`Salaries $${this.state.data.salaries}`}</li>
          <li><i className="material-icons li4">network_cell</i>{`Fundraising $${this.state.data.fundraising_fees}`}</li>
          <li><i className="material-icons li5">network_cell</i>{`Other $${this.state.data.other}`}</li>
        </ul>
			</div>
		);
	}
});

export default Description;
