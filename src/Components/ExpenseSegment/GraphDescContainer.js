import React from 'react'
import DescTitle from './DescTitleContainer.js'
import Graph from './ExpenseGraphContainer.js'


var GraphDescContainer = React.createClass({
  	componentDidMount: function () {
    const config = {
      origin: 'right',
      duration: 700,
      delay: 200,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      reset: true
    }

    const config2 = {
      origin: 'left',
      duration: 700,
      delay: 200,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      reset: true
    }
    this.props.sr.reveal(this.refs.box4, config)
    this.props.sr.reveal(this.refs.box3, config2)
  },
	render () {
		return (
			<div className='GraphDescContainer2'>
				<div ref='box3'>
	        <DescTitle reports={this.props.reports}/>
				</div>
				<div ref='box4'>
	        <Graph reports={this.props.reports}/>
				</div>  
			</div>
		);
	}
});

export default GraphDescContainer;
