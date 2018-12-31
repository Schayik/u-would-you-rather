import { _getUsers, _getQuestions, _saveQuestion } from '../utils/_DATA'
import { receiveUsers, addQuestionToAuthedUser } from './users'
import { receiveQuestions, addQuestion } from './questions'
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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return _saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    })
      .then(question => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToAuthedUser(authedUser, question.id))
      })
  }
}
