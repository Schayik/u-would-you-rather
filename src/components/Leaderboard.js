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
            <li key={id}>
              <h2>{users[id].name}</h2>
              <p>Questions: {users[id].questions.length}</p>
              <p>Answers: {Object.keys(users[id].answers).length}</p>
              <p>Total: {users[id].questions.length + Object.keys(users[id].answers).length}</p>
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
