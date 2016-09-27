import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import '../../App.css';
import ExpenseSegment from './ExpenseSegment.js';
import ArticleSegment from '../ArticleSegment/ArticleSegment.js';



class ExpenseContainer extends Component {
  render() {
    return (
      <div className="App">
        <StickyContainer>
          <ExpenseSegment reports={this.props.reports}/>
          <ArticleSegment />
        </StickyContainer>
      </div>
    );
  }
}

export default ExpenseContainer;
