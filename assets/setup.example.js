import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { createLogicMiddleware } from 'redux-logic'
import logic from './logic'
import api from './api'

const logicMiddleware = createLogicMiddleware(logic, { api })

const store = createStore(
  reducers,
  {},
  applyMiddleware(logicMiddleware)
)

export default store
