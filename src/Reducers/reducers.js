import { combineReducers } from 'redux'
import {
  SELECT_ORG, INVALIDATE_ORG,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../Actions/actions'

function selectedOrg(state = 'org', action) {
  switch (action.type) {
    case SELECT_ORG:
      return action.org
    default:
      return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_ORG:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByOrg(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_ORG:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.org]: posts(state[action.org], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByOrg,
  selectedOrg
})

export default rootReducer