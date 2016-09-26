import fetch from 'isomorphic-fetch'

export const SELECT_ORG = 'SELECT_ORG'

export function selectOrg(org) {
  return {
    type: SELECT_ORG,
    org
  }
}

export const INVALIDATE_ORG = 'INVALIDATE_ORG'

export function invalidateOrg(org) {
  return {
    type: INVALIDATE_ORG,
    org
  }
}

export const REQUEST_REPORTS = 'REQUEST_REPORTS'
export function requestReports(org) {
  return {
    type: REQUEST_REPORTS,
    org
  }
}

export const RECEIVE_REPORTS = 'RECEIVE_REPORTS'
export function receiveReports(org, json) {
  return {
    type: RECEIVE_REPORTS,
    org,
    reports: json,
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchReports('reactjs'))

export function fetchReports(org) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestReports(org))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://partner-api.herokuapp.com/organisations/${org}`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveReports(org, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}