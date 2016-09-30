import React from 'react';
import HeroTitle from './HeroTitle.js'
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer.js'
import './styles.css';

var HeroSegment = React.createClass({

handleTap: function(event) {
  this.setState({activeTab: event.target.id});
},

  render() {
    return (
    	<div className="HeroBackground">
        <div className="Logo"></div>
          <HeroTitle/>
        <div className="HeroContainer">
          <h3>Our Mission</h3>
          <DescriptionContainer width={'80%'} height={100} content={
            `Partner aims to advance transparency in non-profit organizations by delivering information that will allow users to make meaningful decisions and inspire philanthropic beneficence.`
          }/>
        {this.props.children}
        </div>
      </div>
    );
  }
});

export default HeroSegment;
