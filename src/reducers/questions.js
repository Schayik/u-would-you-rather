
import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question,
      }
    case SAVE_QUESTION_ANSWER:
      const { id, answer, authedUser } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(authedUser)
          }
        }
      }
    default:
      return state
  }
}

export default questions
