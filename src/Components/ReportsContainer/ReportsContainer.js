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
    reports: this.props.reports,
    activeTab: 'tab1'
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

handleTap: function(event) {
  this.setState({activeTab: event.target.id});
},

render() {
    return (
      <div>
      	<StickyContainer>
      	  <Sticky>
          	<div className='NavBarContainer'>
          		<div className='NavTitleContainer'>
          			<h1>Example Title</h1>
          		</div>
				      <div className='TabBarContainer'>
				        <ul className='navTab'>
				          <li><a id='tab1' className={(this.state.activeTab === 'tab1') ? 'active' : ''} onClick={this.handleTap}>Three</a></li>
				          <li><a id='tab2' className={(this.state.activeTab === 'tab2') ? 'active' : ''} onClick={this.handleTap}>Three</a></li>
				          <li><a id='tab3' className={(this.state.activeTab === 'tab3') ? 'active' : ''} onClick={this.handleTap}> Three</a></li>
				          <li><a id='tab4' className={(this.state.activeTab === 'tab4') ? 'active' : ''} onClick={this.handleTap}>Three</a></li>
				        </ul>
				      </div>
          	</div>
        	</Sticky>
	      	<RevenueContainer />
	      	<ExpenseContainer reports={this.state.reports}/>
      	</StickyContainer>
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
