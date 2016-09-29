import React from 'react'
import Description from './RevenueDescription.js'

var RevenueDescriptionContainer = React.createClass({

	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
      color: '#5B5B5B'
		}

		return (
			<div className={'EDescription1'} style={divStyle}>
				<Description reports={this.props.reports}/>
			</div>
		);
	}
});


export default RevenueDescriptionContainer;
