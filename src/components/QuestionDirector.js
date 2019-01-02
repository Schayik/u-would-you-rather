import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import QuestionDetails from './QuestionDetails'

class QuestionDirector extends Component {

  render() {
    const { authedUser, users, question } = this.props

    const questionAnswered = Object.keys(users[authedUser].answers).includes(question.id)

    return (
      <div>
        {questionAnswered
          ? <QuestionDetails question={question} author={users[question.author]} authedUser={authedUser}/>
          : <Question question={question} author={users[question.author]}/>
        }
      </div>
    )
  }
}

function mapStateToProps( { authedUser, users, questions }, props ) {
  return {
    authedUser,
    users,
    question: questions[props.match.params.id]
  }
}

export default connect(mapStateToProps)(QuestionDirector)
