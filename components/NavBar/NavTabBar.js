import React, { PropTypes } from 'react';
import s from './styles.css';


class NavTabBar extends React.Component {

  render() {
    return (
      <div className={s.panel, s.panelPrimary}>
        <ul className={s.navTab}>
          <li className={s.active}><a>One</a></li>
          <li><a> Two</a></li>
          <li><a> Three</a></li>
          <li><a>Four</a></li>
        </ul>
      </div>
    );
  }

}

export default NavTabBar;
