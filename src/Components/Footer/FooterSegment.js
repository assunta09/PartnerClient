import React from 'react';
import './styles.css';

var FooterSegment = React.createClass ({
  render() {
    return (
      <div className='FooterContainer'>
        <div className='Privacy'>@2016 The Partner | All Rights Reserved</div>
        <div className='FooterLogo'></div>
        <p className='License'>MIT Licensed</p>
      </div>
    );
  }
});

export default FooterSegment;
