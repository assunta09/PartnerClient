import React from 'react';
import './styles.css';
import AboutMissionProgram from './AboutMissionProgram.js';

var AboutInfo = React.createClass ({
	componentWillReceiveProps: function(nextProps){
	
	},
	render () {
		return (
			<div className="AboutInfoContainer">
				<div>
					<h1>Name of Company</h1>
				</div>
				<div className="YearAndWebsiteContainer">
					<div className="AboutYearContainer">
						<h3>Year Formed: </h3>
					</div>
					<div className="AboutWebsiteContainer">
						<h3>Website: </h3> 
					</div>
				</div>
				<div>
					<AboutMissionProgram reports={this.props.reports}/>
				</div>
			</div>
		);
	}
});
export default AboutInfo