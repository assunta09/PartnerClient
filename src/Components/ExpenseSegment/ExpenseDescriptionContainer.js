import React from 'react'
import Description from './ExpenseDescription.js'

var ExpenseDescriptionContainer = React.createClass({

	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
      color: '#5B5B5B'
		}

		return (
			<div className={'EDescription'} style={divStyle}>
				<Description reports={this.props.reports}/>
			</div>
		);
	}
});


export default ExpenseDescriptionContainer;
