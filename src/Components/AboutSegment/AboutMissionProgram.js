import React from 'react';
import './styles.css';
import Slider from 'react-slick';

var AboutMissionProgram = React.createClass({
	getInitialState: function() {
		return {
			cards: [],
			components: []
		}
	},

	componentWillReceiveProps: function(nextProps) {
		var report = nextProps.reports
		var program = report.reports.programServiceAccomplishments
		var mission

		var allCards = []

		if (report.reports.organisation.mission) {
			mission = {description: { text: report.reports.organisation.mission, type: 'mission'} }
			allCards.push(mission)
		}
 		if (program) {
			program.forEach(function (card) {
				var programCard = {description: 
									{
										text: card.description, 
										type: 'program', 
										expense: card.expense_amount,
										grant: card.grant_amount,
										revenues: card.revenues
									}
								}
				allCards.push(programCard)
			})
 		} 
 		
 		var cardComponents = this.createCards(allCards)
		this.setState({
			components:cardComponents
		})
	},

	changeHandler: function(e) {
		this.refs.slider.slickGoTo(e.target.value)
	},

	createCards: function(allC) {
		
		var allCards = allC.map(function(card) {
			if (card.description.type === 'mission') {
				return (
	        <div>
	        	<div className="AboutCard">
	        		<h1>Mission</h1>
	        		<div>
	        			<h3>{card.description.text}</h3>
	        		</div>
	        	</div>
	        </div>
				)
			} else {
				return (
	        <div>
	        	<div className="AboutCard">
	        		<h1>Program Service Accomplishments</h1>
	        		<div>
	        			<h3>{card.description.text}</h3>
	        		</div>
	        		<div>
	        			<div>
	        				Expense Amount: {card.description.expense_amount}
	        			</div>
	        			<div>
	        				Grant Amount: {card.description.grant_amount}
	        			</div>
	        			<div>
	        				Revenue: {card.description.revenues} 
	        			</div>
	        		</div>
	        	</div>
	        </div>
				)
			}
		})

		return allCards
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
		     		{this.state.components[0]}
		     	</div>
		     	<div>
		     		{this.state.components[1]}
		     	</div>
		     	<div>
		     		{this.state.components[2]}
		     	</div>
		     	<div>
		     		{this.state.components[3]}
		     	</div>
	  		</Slider>
      </div>
    );
  }

});

export default AboutMissionProgram;