import React from 'react'
import DescTitle from './DescTitleContainer.js'
import SalaryTitle from './SalariesDescContainer.js'
import CanvasContainer from './CanvasContainer.js'


var GraphDescContainer = React.createClass({
	componentDidMount: function () {
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 300,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }

    const config2 = {
      origin: 'left',
      duration: 1000,
      delay: 300,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }

    this.props.sr.reveal(this.refs.box4, config)
    this.props.sr.reveal(this.refs.box3, config2)
  },
	render () {
		return (
			<div className='GraphDescContainer2'>
				<div ref='box3'>
	        <DescTitle reports={this.props.reports}/>
	        <SalaryTitle reports={this.props.reports}/>
				</div>
				<div ref='box4'>
	        <CanvasContainer reports={this.props.reports}/>
				</div>
			</div>
		);
	}
});

export default GraphDescContainer;
