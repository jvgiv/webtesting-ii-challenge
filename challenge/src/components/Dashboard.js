import React, { Component } from 'react'

export default class Dashboard extends Component {


  render() {
      console.log(this.props)
    return (
      <div>
        <button onClick={(event) => this.props.functionBoss(event)}>Throw a Pitch</button>
      </div>
    )
  }
}
