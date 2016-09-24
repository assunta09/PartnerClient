import React from 'react';
import './styles.css';


var NavTabBar = React.createClass({

  getInitialState: function() {
    return {active: ''};
  },

  handleTap: function(event) {
    this.setState({active: 'active'});
  },

  render() {  
    return (
      <div className='panel panelPrimary'>
        <ul className='navTab'>
          <li><a className={this.state.active}>One</a></li>
          <li><a onClick={this.handleTap}>Two</a></li>
          <li><a> Three</a></li>
          <li><a>Four</a></li>
          {console.log(this.state.active)}
        </ul>
      </div>
    );
  }

});

export default NavTabBar;
