import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    redirect: false,
  }

  handleClick(id) {
    const { dispatch } = this.props

    dispatch(setAuthedUser(id))

    this.setState({ redirect: true })
  }

  render() {

    const { users } = this.props
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h1>Login</h1>
        <ul className='login-list'>
          {Object.keys(users).map(id => (
            <li key={id}>
              <img
                src={users[id].avatarURL}
                alt={`Avatar of ${users[id]}`}
              />
              <p>{users[id].name}</p>
              <button
                onClick={() => this.handleClick(id)}>
                Login with {id}
              </button>
            </li>
          ))}
          <li key='logout'>
            <button
              onClick={() => this.handleClick(null)}>
              Logout
            </button>
          </li>
        </ul>

      </div>
    )
  }
}

function mapStateToProps( { users } ) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
