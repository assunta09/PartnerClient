import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import App from './App';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ReportsContainer from './Components/ReportsContainer/ReportsContainer.js'
import {rootReducers} from './Reducers/reducers.js';

import './index.css';

// const loggerMiddleware = createLogger()

const store = createStore(
  combineReducers({
    ...rootReducers,
    routing: routerReducer
  }),
  applyMiddleware(
  	thunkMiddleware,
  	// loggerMiddleware
  )
)

// store.dispatch(selectOrg('1'))
// store.dispatch(fetchReports('1')).then(() =>
//   console.log(store.getState())
// )
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}/>
			<Route path='/organisations/:orgID' component={ReportsContainer}/>
			<Route path='/test' component={ReportsContainer}/>
		</Router>
	</Provider>,
	document.getElementById('root')
)
