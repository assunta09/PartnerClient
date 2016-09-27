import React from 'react'
import Title from './DescTitle.js'
import DescriptionContainer from './ExpenseDescriptionContainer.js'


var DescTitle = React.createClass({

	render () {

		return (
			<div className='DescTitleContainer'>
        <Title />
        <DescriptionContainer reports={this.props.reports} width={'100%'} content={
          `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
           standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
           make a type specimen book. It has survived not only five centuries, but also the leap into electronic
           typesetting, remaining essentially Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
           standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
           make a type specimen book. It has survived not only five centuries, but also the leap into electronic
           typesetting, remaining essentially`
        }/>
			</div>
		);
	}
});


export default DescTitle;
