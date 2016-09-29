import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { selectOrg, fetchReports } from '../../Actions/actions.js';
import Scroll from 'react-scroll';
import NavBar from '../NavBar/NavBar.js'
import ExpenseContainer from '../ExpenseSegment/ExpenseContainer.js';
import RevenueContainer from '../RevenueSegment/RevenueContainer.js';
// import BubbleSegment  from '../BubbleSegment/BubbleSegment.js';
import AboutContainer  from '../AboutSegment/AboutContainer.js';
import ScrollReveal from 'scrollreveal';


const mapStateToProps = ({ reports }) => ({
	reports
});

const mapDispatchToProps = dispatch => ({
	selectOrg: org => dispatch(selectOrg(org)),
	fetchReports: org => dispatch(fetchReports(org)),
});

const Element = Scroll.Element;

const ReportsContainer = React.createClass({

getInitialState () {
  return {
    reports: this.props.reports,
    activeTab: '',
    sr: ScrollReveal()
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
      	  	<NavBar sr={this.state.sr}/>
        	</Sticky>
        	<Element name="test1" className="element">
	      		<AboutContainer reports={this.state.reports} sr={this.state.sr}/>
	      	</Element>
        	<Element name="test2" className="element">
	      		<RevenueContainer reports={this.state.reports} sr={this.state.sr}/>
	      	</Element>
	      	<Element name="test3" className="element">
	      		<ExpenseContainer reports={this.state.reports} sr={this.state.sr}/>
	      	</Element>
      	</StickyContainer>
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
