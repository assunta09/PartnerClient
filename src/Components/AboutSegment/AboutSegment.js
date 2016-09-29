import React from 'react';
import './styles.css';
import AboutMeMaps from './AboutMeMaps.js';
import AboutDescription from './AboutDescription.js';

var AboutSegment = React.createClass ({
  render() {
    return (
    	<div className='AboutSegment'>
        <AboutMeMaps reports={this.props.reports}/>
        <AboutDescription reports={this.props.reports}/>
    	</div>
    );
  }
});

export default AboutSegment;
