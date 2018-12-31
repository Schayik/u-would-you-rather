import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    redirect: false,
  }

  handleSubmit = e => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState({ redirect: true })
  }

  render() {

    const { optionOneText, optionTwoText, redirect } = this.state

    if (redirect) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h1>New Question</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option One"
            value={optionOneText}
            onChange={e => this.setState({optionOneText: e.target.value})}
            maxLength={50}
          />
          <textarea
            placeholder="Option Two"
            value={optionTwoText}
            onChange={e => this.setState({optionTwoText: e.target.value})}
            maxLength={50}
          />
          <button
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
