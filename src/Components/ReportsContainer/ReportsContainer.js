import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { selectOrg, fetchReports } from '../../Actions/actions.js';
import ExpenseContainer from '../ExpenseSegment/ExpenseContainer.js';
import RevenueContainer from '../RevenueSegment/RevenueContainer.js';
import NavBar from '../NavBar/NavBar.js';

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
				<StickyContainer>
					<Sticky>
          	<NavBar />
        	</Sticky>
      		<ExpenseContainer title='Expense Breakdown' reports={this.state.reports}/>
      		<RevenueContainer reports={this.state.reports}/>
				</StickyContainer>
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
