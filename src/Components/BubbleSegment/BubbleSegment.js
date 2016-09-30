import React from 'react';
import './styles.css';
import BubbleGraphDescContainer from './BubbleGraphDescContainer.js';

var BubbleSegment = React.createClass({
	
	getInitialState: function() {
		return {
			exp: '',
			rev: ''
		}
	},

	componentWillReceiveProps: function(nextProps) {
		var report = nextProps.reports
		var data = report.reports
		var exp = data.generalExpensesAbsolutes.total
		var rev = data.generalRevenueAbsolutes.total

		// console.log(exp)
		// console.log(rev)	
		this.setState({
			exp: exp,
			rev: rev
		})
	},

  render() {
    return (
      <div className='BubbleSegment'>
      	<div className="RevAndExpBubSeg">
	      	<div className="RevenueBubbleSeg">
	      		<div className="RevsLabel">
	      			<h2>Revenue</h2>
	      			<h3>{'$' + this.state.rev}</h3>
	      		</div>
	      	</div>
	      	<div className="ExpenseBubbleSeg">
	      	  <div className="ExpsLabel">
	      			<h2>Expense</h2>
	      			<h3>{'$' + this.state.exp}</h3>
	      		</div>
	      	</div>
      	</div>
        <BubbleGraphDescContainer reports={this.props.reports}/>
      </div>
    );
  }
});

export default BubbleSegment;
