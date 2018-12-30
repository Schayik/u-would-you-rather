import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleSubmit = e => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))
  }

  render() {

    const { optionOneText, optionTwoText } = this.state

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
