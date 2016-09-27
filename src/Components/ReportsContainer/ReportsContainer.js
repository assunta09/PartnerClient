import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { selectOrg, fetchReports } from '../../Actions/actions.js';
import ExpenseContainer from '../ExpenseSegment/ExpenseContainer.js';

const mapStateToProps = ({ reports }) => ({
	reports
});

const mapDispatchToProps = dispatch => ({
	selectOrg: org => dispatch(selectOrg(org)),
	fetchReports: org => dispatch(fetchReports(org)),
});

const ReportsContainer = React.createClass({

getInitialState () {
  return {
    reports: this.props.reports
  }
},

componentWillMount: function () {
	console.log(this.state)
	var that = this;
	this.props.fetchReports(this.props.routeParams.orgID)
		.then((response) => 
			that.setState( 
			  {	
					reports: response
				}
			)
		)
},

render() {
    return (
      <div>
      	{console.log(this.state)}
      	<ExpenseContainer reports={this.state.reports}/>
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
