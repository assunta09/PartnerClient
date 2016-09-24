import React from 'react';
import './styles.css';


var NavTabBar = React.createClass({

  getInitialState: function() {
    return {activeTab: 'tab2'};
  },

  handleTap: function(event) {
    this.setState({activeTab: event.target.id});
  },

  render() {  
    return (
      <div className='panel panelPrimary'>
        <ul className='navTab'>
          <li><a id='tab1' className={(this.state.activeTab === 'tab1') ? 'active ripple rippleEffect' : ''} onClick={this.handleTap}>One</a></li>
          <li><a id='tab2' className={(this.state.activeTab === 'tab2') ? 'active' : ''} onClick={this.handleTap}>Two</a></li>
          <li><a id='tab3' className={(this.state.activeTab === 'tab3') ? 'active' : ''} onClick={this.handleTap}> Three</a></li>
          <li><a id='tab4' className={(this.state.activeTab === 'tab4') ? 'active' : ''} onClick={this.handleTap}>Four</a></li>
        </ul>
      </div>
    );
  }

});

export default NavTabBar;
