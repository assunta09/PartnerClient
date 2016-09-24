import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import HeroSegment from './Components/HeroSegment/HeroSegment.js'
import ImpactSegment from './Components/ImpactSegment/ImpactSegment.js';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="organisations" component={HeroSegment}/>
    <Route path="/organisations/:orgId" component={ImpactSegment}/>
  </Router>
), document.getElementById('root'))
