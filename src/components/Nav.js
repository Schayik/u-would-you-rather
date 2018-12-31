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
          <li className='right'>
            <NavLink to='/login' activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li className='right'>
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
