import React from 'react';
import './styles.css';
import { StickyContainer, Sticky } from 'react-sticky';
import BubbleContainer from '../BubbleSegment/BubbleContainer.js'
import BubbleGraphDescContainer from './BubbleGraphDescContainer.js';
import NavBar from '../NavBar/NavBar.js'

var BubbleSegment = React.createClass({

  render() {
    return (
      <div className='BubbleSegment'>
        <h1>Welcome to the bubble segment</h1>
        <BubbleGraphDescContainer reports={this.props.reports}/>
      </div>
    );
  }
});

export default BubbleSegment;
