import React from 'react'
import Title from './SalaryTitle.js'
import DescriptionContainer from './SalaryContainer.js'

var DescTitle = React.createClass({
	render () {

		return (
			<div className='SalariesDescContainer'>
      	<Title />
      	<DescriptionContainer reports={this.props.reports} width={'100%'}/>
			</div>
		);
	}
});


export default DescTitle;
