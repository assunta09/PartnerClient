import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

var NavTabBar = React.createClass({

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
          <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>About</Link></li>
          <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Revenue</Link></li>
          <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>Expense</Link></li>
          <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Net</Link></li>
        </ul>
      </div>
    );
  }

});

export default NavTabBar;
