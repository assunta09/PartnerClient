import React from 'react';
import './styles.css';

import NavTitle from './NavTitle.js'
import NavTabBar from './NavTabBar.js'

var NavBar = React.createClass ({

  render() {
    return (
      <div className='NavBarContainer'>
        <NavTitle />
        <NavTabBar />
      </div>
    );
  }
});

export default NavBar;
