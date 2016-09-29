import React from 'react';
import './styles.css';
import Slider from 'react-slick';

var AboutMissionProgram = React.createClass({
	getInitialState: function() {
		return {
			cards: []
		}
	},

	componentWillReceiveProps: function(nextProps) {
		var report = nextProps.reports
		console.log(report.reports.organisation.mission)
		console.log(report.reports.programServiceAccomplishments)
		this.setState({

		})
	},

	changeHandler: function(e) {
		this.refs.slider.slickGoTo(e.target.value)
	},

	render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
    	<div className="AboutSliderContainer">
	      <Slider {...settings}>
	        <div>
	        	<div className="AboutCard">
	        	</div>
	        </div>
	        <div><h3>2</h3></div>
	        <div><h3>3</h3></div>
	        <div><h3>4</h3></div>
	        <div><h3>5</h3></div>
	        <div><h3>6</h3></div>
	      </Slider>
      </div>
    );
  }

});

export default AboutMissionProgram;