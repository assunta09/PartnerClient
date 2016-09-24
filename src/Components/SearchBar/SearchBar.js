import React, { PropTypes, Component } from 'react';
import './styles.css';

var SearchBar = React.createClass({
	getInitialState: function() {
		return {value: ''};
	},

	handleChange: function(event) {
		this.setState({value: event.target.value});
	},

	render () {
		return (
			<div>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
					className={'SearchBarContainer'}
				/>
				{console.log(this.state.value)}
			</div>
		);
	}
});

export default SearchBar;