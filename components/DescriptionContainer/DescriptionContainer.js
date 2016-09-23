import React, { PropTypes } from 'react'
import Description from './Description.js'

var DescriptionContainer = React.createClass({
	
	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
			maring: 0,
			margin: 'auto',
			backgroundColor: this.props.color
		}

		return (
			<div style={divStyle}>
				<Description/>
			</div>
		);
	}
});


export default DescriptionContainer;

