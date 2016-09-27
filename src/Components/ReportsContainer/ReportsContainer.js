import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { selectOrg, fetchReports } from '../../Actions/actions.js';

const mapStateToProps = ({ reports }) => ({
	reports
});

const mapDispatchToProps = dispatch => ({
	selectOrg: org => dispatch(selectOrg(org)),
	fetchReports: org => dispatch(fetchReports(org)),
});

const ReportsContainer = React.createClass({

getInitialState () {
  return {
    reports: this.props.reports
  }
},

componentWillMount: function () {
	console.log(this.state)
	var that = this;
	this.props.fetchReports('1')
		.then((response) => 
			that.setState( 
			  {	
					reports: response
				}
			)
		)
},

render() {
    return (
      <div>
   			<p>yo</p>
      	{console.log(this.state)}
      </div>
    );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer);
