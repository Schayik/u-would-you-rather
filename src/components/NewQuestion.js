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
      <div className='question'>
        <h3>Would You Rather ...</h3>
        <div className='question-wrapper'>
          <img
            src={this.props.avatarURL}
            alt=''
          />
          <form className='question-form' onSubmit={this.handleSubmit}>
            <textarea
              placeholder="Option One"
              value={optionOneText}
              onChange={e => this.setState({optionOneText: e.target.value})}
              maxLength={50}
            />
            <span>OR</span>
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
      </div>
    )
  }
}

function mapStateToProps ( { authedUser, users } ) {
  return {
    avatarURL: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(NewQuestion)
