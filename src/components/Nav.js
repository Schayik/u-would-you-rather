import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            {this.props.authedUserName}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps( { authedUser, users } ) {
  return {
    authedUserName: authedUser ? users[authedUser].name : null
  }
}

export default connect(mapStateToProps)(Nav)
