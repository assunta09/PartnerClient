import React from 'react';
import './styles.css';
import Loader from 'react-loader';

var Typeahead = require('react-typeahead').Typeahead;

var SearchBar = React.createClass({
	getInitialState: function() {
		return {
			value: '',
			chartData: [1],
			data: {},
			routeID: ''
		};
	},

	handleSelection: function(event) {
		this.setState({routeID: this.state.data[event]})
	},

	componentWillMount: function() {
    return fetch('https://partner-api.herokuapp.com/organisations')
      .then((response) => response.json())
      .then((Data) => {
			var list = (Data.organisations)
        this.setState({
          chartData: Object.keys(list),
          data: list
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

	render () {
		return (
			<div className='SearchContent'>  
				<Typeahead className={'SearchBarContainer'}
			    options={this.state.chartData}
			    maxVisible={3}
			    onOptionSelected={this.handleSelection}
			  />
				<div className="SearchBtnContainer">
					<a href={`/organisations/${this.state.routeID}`}><button className="btn">Search</button></a>
				</div>
			</div>
		);
	}
});

export default SearchBar;
