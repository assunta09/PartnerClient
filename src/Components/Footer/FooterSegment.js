import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';

var scroll     = Scroll.animateScroll;

var FooterSegment = React.createClass ({

scrollToTop: function() {
  scroll.scrollToTop();
},

  render() {
    return (
      <div className='FooterContainer'>
      	<div className="FooterTriangleContainer">
	    		<div className="FooterTriangle"></div>		
      	</div>
      	<div className="FooterTop">
      			<a id="FooterLink" onClick={this.scrollToTop}>Top</a>
      	</div>
        <div className='Privacy'>@2016 The Partner | All Rights Reserved</div>
        <div className='FooterLogo'></div>
        <p className='License'>MIT Licensed</p>
      </div>
    );
  }
});

export default FooterSegment;
