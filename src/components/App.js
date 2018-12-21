import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'

import QuestionList from './QuestionList'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className='container'>
        <QuestionList />
      </div>
    );
  }
}

export default connect()(App);
