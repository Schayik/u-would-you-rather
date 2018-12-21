import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionSmall extends Component {

  // todo: make button go to right page.

  render() {
    const { question, author } = this.props
    console.log(author)
    return (
      <div>
        <h3>{author.name} Asks:</h3>
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author}`}
        />
        <div>
          <h3>Would You Rather</h3>
          <p>... {question.optionOne.text} or ...</p>
          <button>View Full</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { users, questions }, {id} ) {
  const question = questions[id]
  return {
    question: question,
    author: users[question.author]
  }
}

export default connect(mapStateToProps)(QuestionSmall)
