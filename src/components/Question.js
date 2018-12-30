import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

  state = {
    option: 'none'
  }

  handleSubmit(e) {
    e.preventDefault()

    this.state.option === 'none'
      ? alert('No option selected, please select one.')
      : alert(this.state.option)


    console.log(this.state.option)
  }

  render() {
    const { author, question } = this.props

    return (
      <div className='question'>
        <h3>{author.name} Asks:</h3>
        <div className='question-wrapper'>
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author}`}
          />
          <div className='question-form'>
            <h2>Would You Rather</h2>
            <form
              onChange={e => this.setState({option: e.target.value})}
              onSubmit={e => this.handleSubmit(e)}>
              <div>
                <input type='radio' name='choice' value='optionOne' />
                <span>{question.optionOne.text}</span>
              </div>
              <div>
                <input
                  type='radio' name='choice' value='optionTwo' />
                <span>{question.optionTwo.text}</span>
              </div>
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Question)
