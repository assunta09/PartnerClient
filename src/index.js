import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import HeroSegment from './Components/HeroSegment/HeroSegment.js'
import DoughnutChart from './Components/GraphContainer/DoughnutChart.js';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ExpenseContainer from './Components/ExpenseSegment/ExpenseContainer.js';

import { selectOrg, fetchReports } from './Actions/actions.js'
import {rootReducers} from './Reducers/reducers.js';

import './index.css';

const store = createStore(
  combineReducers({
    ...rootReducers,
    routing: routerReducer
  }),
  applyMiddleware(
  	thunkMiddleware,
  )
)

store.dispatch(selectOrg('1'))
store.dispatch(fetchReports('1')).then(() =>
  console.log(store.getState())
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}/>
			<Route path='/organisations' component={App}>
				<Route path='/organisations/:orgID' component={ExpenseContainer}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
