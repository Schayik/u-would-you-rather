import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
      : <div>Please login first</div>
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
              <Switch>
                <PrivateRoute path='/' exact component={QuestionList} />
                <PrivateRoute path='/add' component={NewQuestion} />
                <PrivateRoute path='/leaderboard' component={Leaderboard} />
                <Route path='/question/:id' component={QuestionDirector} />
                <Route path='/login' component={Login} />
                <Route render={() => <div>404 - page does not exist</div>} />
              </Switch>
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => ({
  loading: questions === null,
  loggedIn: authedUser !== null,
})

export default connect(mapStateToProps)(App);
