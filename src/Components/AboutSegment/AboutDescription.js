import React from 'react';
import './styles.css';
import AboutInfo from './AboutInfo.js';

var AboutDescription = React.createClass ({
	render () {
		return (
			<div className="AboutDescriptionContainer">
				<AboutInfo reports={this.props.reports}/>
			</div>
		);
	}
});

export default AboutDescription