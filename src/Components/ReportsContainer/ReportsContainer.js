import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { selectOrg, fetchReports } from '../../Actions/actions.js';
import { StickyContainer, Sticky } from 'react-sticky';
import NavBar from '../NavBar/NavBar.js'
import ExpenseContainer from '../ExpenseSegment/ExpenseContainer.js';
import RevenueContainer from '../RevenueSegment/RevenueContainer.js';

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
	      	<RevenueContainer />
	      	<ExpenseContainer reports={this.state.reports}/>
      	</StickyContainer>
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
