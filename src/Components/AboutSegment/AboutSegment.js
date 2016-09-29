import React from 'react';
import './styles.css';
import AboutMeMaps from './AboutMeMaps.js';

var AboutSegment = React.createClass ({
  render() {
    return (
    	<div className='AboutSegment'>
        <AboutMeMaps reports={this.props.reports}/>
    	</div>
    );
  }
});

export default AboutSegment;
