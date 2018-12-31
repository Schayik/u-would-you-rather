import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {

  render() {

    const { users, orderedIds } = this.props

    return (
      <div>
        <h1>Leaderboard</h1>
        <ul>
          {orderedIds && orderedIds.map(id => (
            <li key={id} className='question'>
              <h3>{users[id].name}</h3>
              <div className='question-wrapper'>
                <img
                  src={users[id].avatarURL}
                  alt={`Avatar of ${users[id]}`}
                />
                <div className='question-options'>
                  <h2>Questions: {users[id].questions.length}</h2>
                  <h2>Answers: {Object.keys(users[id].answers).length}</h2>
                  <h2>Total: {users[id].questions.length + Object.keys(users[id].answers).length}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps( {users} ) {
  return{
    users,
    orderedIds: Object.keys(users)
      .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(Leaderboard)
