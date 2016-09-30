import React from 'react';
import './styles.css';
import AboutMissionProgram from './AboutMissionProgram.js';

var AboutInfo = React.createClass ({
	getInitialState: function() {
		return {
			report: {}
		}
	},

	componentWillReceiveProps: function(nextProps){
		var report = nextProps.reports
		this.setState({
			report: report.reports.organisation
		})
	},
	render () {
		return (
			<div className="AboutInfoContainer">
				<div>
					<h1>{this.state.report.name}</h1>
				</div>
				<div className="YearAndWebsiteContainer">
					<div className="AboutYearContainer">
						<h3>Year Formed: {this.state.report.year_formed}</h3>
					</div>
					<div className="AboutWebsiteContainer">
						<h3>Website: {this.state.report.domain}</h3> 
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