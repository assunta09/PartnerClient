import React from 'react';
import '../../App.css';
import AboutSegment from './AboutSegment';

var AboutContainer = React.createClass({
	render () {
		return (
			<div className='App'> 
				<AboutSegment/>
			</div>
		); 
	}
});

export default AboutContainer;