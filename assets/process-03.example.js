import { createLogic } from 'redux-logic'
const { Observable } = 'rxjs'
import actions from './actions'

export const getUserLogic = createLogic({
  type: 'GET_USER',
  cancelType: 'GET_USER_CANCEL',
  latest: true,
  process({ action, rxjsApi }, dispatch, done) {
    dispatch(
      rxjsApi.getUser(action.payload.id)
        .map(response => response.user)
        .map(user => actions.getUserSuccess(user))
        .catch(err =>
          Observable.of(actions.getUserFailure(err))
        )
    )
    done()
  },
})
