import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var NavTabBar = React.createClass({

  getInitialState: function() {
    return {activeTab: 'tab2'};
  },

  handleTap: function(event) {
    this.setState({activeTab: event.target.id});
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

  render() {
    return (
      <div className='TabBarContainer'>
        <ul className='navTab'>
          <li><Link activeClass="active" className={(this.state.activeTab === 'tab1') ? 'test1 active' : 'test1'} id="tab1" to="test1" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Revenue</Link></li>
          <li><Link activeClass="active" className={(this.state.activeTab === 'tab2') ? 'test2 active' : 'test2'} id="tab2" to="test2" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Expense</Link></li>
          <li><Link activeClass="active" className={(this.state.activeTab === 'tab3') ? 'test3 active' : 'test3'} id="tab3" to="test3" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Net</Link></li>
          <li><Link activeClass="active" className={(this.state.activeTab === 'tab4') ? 'test4 active' : 'test4'} id="tab4" to="test4" spy={true} smooth={true} duration={500} onClick={this.handleTap}>Mission</Link></li>
        </ul>
      </div>
    );
  }

});

export default NavTabBar;
