import React from 'react';
import './styles.css';
import LondonCycle from './AboutMeMaps.js';

var AboutSegment = React.createClass ({
  render() {
    return (
    	<div className='AboutSegment'>
        <LondonCycle />
    	</div>
    );
  }
});

export default AboutSegment;
