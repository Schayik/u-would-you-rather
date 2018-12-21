import { _getUsers } from '../utils/_DATA'
import { _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return dispatch => {
    return Promise.all([_getUsers(), _getQuestions()])
      .then( values => {
        dispatch(receiveUsers(values[0]))
        dispatch(receiveQuestions(values[1]))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
