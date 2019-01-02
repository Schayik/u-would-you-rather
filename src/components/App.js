import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionDirector from './QuestionDirector'
import Login from './Login'

let loggedIn = false
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}/>
)

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    loggedIn = this.props.loggedIn
    return (
      <Router>
        <Fragment>
          <Nav />
          {!this.props.loading &&
            <div className='container'>
              <PrivateRoute path='/' exact component={QuestionList} />
              <PrivateRoute path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/question/:id' component={QuestionDirector} />
              <Route path='/login' component={Login} />
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps( { questions, authedUser } ) {
  return {
    loading: questions === null,
    loggedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App);
