import { createLogic } from 'redux-logic'
import uuid from 'uuid'

export const addNotificationLogic = createLogic({
  type: 'ADD_NOTIFICATION',
  transform({ action }, next) {
    if (!action.payload.id) {
      action.payload.id = uuid()
    }
    next(action)
  },
})
