import { _getUsers } from '../utils/_DATA'
import { _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData() {
  return dispatch => {
    return Promise.all([_getUsers(), _getQuestions()])
      .then( values => {
        dispatch(receiveUsers(values[0]))
        dispatch(receiveQuestions(values[1]))
      })
  }
}
