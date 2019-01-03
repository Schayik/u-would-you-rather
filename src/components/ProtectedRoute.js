import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default function ProtectedRoute( { component: Component, ...rest } ) {
  console.log(rest)
  if (rest.loggedIn === true) {
    return <Route {...rest} render={props => (
      <Component {...props} />
    )}/>
  } else {
    return <Route {...rest} render={() => (
      <div>Please Login First</div>
    )}/>
  }
  // console.log(rest.loggedIn === true)
  // console.log(rest)
  // return (
  //   <Route {...rest} render={props => {
  //     console.log(props)
  //     return (
  //       props.loggedIn === true
  //         ? <Component {...props} />
  //         : <div>Please login first</div>
  //     )
  //   }}/>
  // )
}
