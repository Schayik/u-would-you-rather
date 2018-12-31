import { RECEIVE_USERS, ADD_QUESTION_TO_AUTHED_USER } from '../actions/users'

function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_TO_AUTHED_USER:
      const { authedUser, id } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(id)
        }
     }
    default:
      return state
  }
}

export default users
