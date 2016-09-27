import React from 'react';
import './styles.css';
var Typeahead = require('react-typeahead').Typeahead;

var SearchBar = React.createClass({
	getInitialState: function() {
		return {
			value: '',
			chartData: [1]
		};
	},

	handleChange: function(event) {
		this.setState({value: event.target.value});
	},

	componentWillMount: function() {
    return fetch('https://partner-api.herokuapp.com/organisations')
      .then((response) => response.json())
      .then((Data) => {
        console.log(Data)
			var list = (Data.organisations)
        this.setState({
          chartData: Object.keys(list)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

	render () {
		return (
			<div>
			{console.log(this.state.chartData)}
				<Typeahead className={'SearchBarContainer'}
			    options={this.state.chartData}
			    maxVisible={5}
			  />
				{console.log(this.state.value)}
			</div>
		);
	}
});

export default SearchBar;
