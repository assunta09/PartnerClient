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
	        			<p>{card.description.text}</p>
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
	        			<p>{card.description.text}</p>
	        		</div>
	        		<div>
	        			<div>
	        				Expense Amount: {card.description.expense}
	        			</div>
	        			<div>
	        				Grant Amount: {card.description.grant}
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

		for (var i = allCards.length; i < 4; i++) {
			var emptyCard = (
	        <div>
	        	<div className="AboutCard">
	        		<h1>Program Service Accomplishments Empty</h1>
	        		<div>
	        			<h3>This Non-Profit did not fill out this section of the 990 form</h3>
	        		</div>
	        	</div>
	        </div>
			)
			allCards.push(emptyCard)
		}	

		return allCards
	},


	render: function () {
		var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true
    };

    return (
    	<div className="AboutSliderContainer">
	      <Slider {...settings} id="slider">
	      	<div>             
            { this.state.components[0]? <div>{this.state.components[0]}</div> : null }
          </div>
          <div>             
            { this.state.components[1]? <div>{this.state.components[1]}</div> : null }
          </div>
          <div>             
            { this.state.components[2]? <div>{this.state.components[2]}</div> : null }
          </div>
          <div>             
            { this.state.components[3]? <div>{this.state.components[3]}</div> : null }
          </div>
	  		</Slider>
	  		

      </div>
    );
  }

});

export default AboutMissionProgram;
