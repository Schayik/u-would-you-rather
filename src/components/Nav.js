import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/add' >New Question</Link>
          </li>
          <li>
            <Link to='/leaderboard' >Leaderboard</Link>
          </li>
          <li className='right'>
            <Link to='/login' >Login</Link>
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
