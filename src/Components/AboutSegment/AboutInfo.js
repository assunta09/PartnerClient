import React from 'react'
import './styles.css'

var AboutInfo = React.createClass ({
	componentWillReceiveProps: function(nextProps){
		console.log(nextProps)
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
					<h2>Mission and Program Service Accomplisments</h2>
				</div>
			</div>
		);
	}
});
export default AboutInfo