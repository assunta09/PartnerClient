import React, { PropTypes } from 'react'
import Description from './Description.js'

var DescriptionContainer = React.createClass({
	
	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
			maring: 0,
			margin: 'auto',
			marginTop: '5%',
			marginBottom: '5%'
		}

		return (
			<div style={divStyle}>
				<Description/>
			</div>
		);
	}
});


export default DescriptionContainer;

