import { combineReducers } from 'redux'
import {
  SELECT_ORG, INVALIDATE_ORG,
  REQUEST_REPORTS, RECEIVE_REPORTS
} from '../Actions/actions'

function selectedOrg(state = 'org', action) {
  switch (action.type) {
    case SELECT_ORG:
      return action.org
    default:
      return state
  }
}

function reports(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_ORG:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_REPORTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_REPORTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.reports,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function reportsByOrg(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_ORG:
    case RECEIVE_REPORTS:
    case REQUEST_REPORTS:
      return Object.assign({}, state, {
        [action.org]: reports(state[action.org], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reportsByOrg,
  selectedOrg,
})

export default rootReducer