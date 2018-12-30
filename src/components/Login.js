import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
        PSV
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
