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

var FooterSegment = React.createClass ({

scrollToTop: function() {
  scroll.scrollToTop();
},

  render() {
    return (
      <div className='FooterContainer'>
      	<div className="FooterTop"><a onClick={this.scrollToTop}>Top</a></div>
        <div className='Privacy'>@2016 The Partner | All Rights Reserved</div>
        <div className='FooterLogo'></div>
        <p className='License'>MIT Licensed</p>
      </div>
    );
  }
});

export default FooterSegment;
