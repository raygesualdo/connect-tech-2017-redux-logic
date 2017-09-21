import { createLogic } from 'redux-logic'

export const validateEmailLogic = createLogic({
  type: 'ADD_USER',
  validate({ action, api }, accept, reject) {
    api.validateUserEmail(action.payload.email)
      .then(() => accept(action))
      .catch(() => reject({type: 'INVALID_EMAIL'}))
  },
})
