import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { selectOrg, fetchReports } from '../../Actions/actions.js';
import { StickyContainer, Sticky } from 'react-sticky';
import Scroll from 'react-scroll';
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

console.log( Scroll )
// react scroll constants
var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

const ReportsContainer = React.createClass({

getInitialState () {
  return {
    reports: this.props.reports,
    activeTab: ''
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

componentDidMount: function() {

  Events.scrollEvent.register('begin', function() {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function() {
    console.log("end", arguments);
  });

  scrollSpy.update();

},

scrollToTop: function() {
  scroll.scrollToTop();
},

componentWillUnmount: function() {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
},

handleTap: function(event) {
	console.log("tabbbs")
	console.log(event.target.id)
  this.setState({activeTab: event.target.id});
},

// 

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
				        	<li><Link activeClass="active" className={(this.state.activeTab === 'tab1') ? 'test1 active' : 'test1'} id="tab1" to="test1" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Revenue</Link></li>
				          <li><Link activeClass="active" className={(this.state.activeTab === 'tab2') ? 'test2 active' : 'test2'} id="tab2" to="test2" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Expense</Link></li>
				          <li><Link activeClass="active" className={(this.state.activeTab === 'tab3') ? 'test3 active' : 'test3'} id="tab3" to="test3" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Net</Link></li>
				          <li><Link activeClass="active" className={(this.state.activeTab === 'tab4') ? 'test4 active' : 'test4'} id="tab4" to="test4" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Mission</Link></li>
				        </ul>
				      </div>
          	</div>
        	</Sticky>
        	<Element name="test1" className="element">
	      		<RevenueContainer />
	      	</Element>
	      	<Element name="test2" className="element">
	      		<ExpenseContainer reports={this.state.reports}/>
	      	</Element>
      	</StickyContainer>
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
