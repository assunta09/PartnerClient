import React from 'react';
import './styles.css';

import NavTabBar from './NavTabBar.js'

var NavBar = React.createClass ({

  render() {
    return (
      <div className='NavBarContainer'>
        <NavTabBar />
      </div>
    );
  }
});

export default NavBar;
