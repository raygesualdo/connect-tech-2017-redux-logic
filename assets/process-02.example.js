import { createLogic } from 'redux-logic'
import actions from './actions'

export const liveSearchLogic = createLogic({
  type: 'SEARCH',
  latest: true,
  debounce: 500,
  processOptions: {
    successType: actions.searchSuccess,
    failType: actions.searchFailure,
  },
  process({ action, api }) {
    return api.search(action.payload)
      .then(response => response.data.results)
  },
})
