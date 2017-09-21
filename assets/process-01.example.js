import { createLogic } from 'redux-logic'
import actions from './actions'

export const loginLogic = createLogic({
  type: 'LOGIN',
  latest: true,
  async process({ action, api, history }, dispatch, done) {
    try {
      const response = await api.login(action.payload)
      localStorage.setItem('auth_token', response.data.token)
      dispatch(actions.loginSuccess())
      history.push('/')
    } catch (error) {
      dispatch(actions.loginFailure(error))
    }
    done()
  },
})
