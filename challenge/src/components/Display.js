import React, { Component } from 'react'

export default class Display extends Component {
constructor(props) {
  super(props)

  this.state = {
    strikes: 0,
    balls: 0,
    type: ''
  }
}

    foulBall = e => {
        e.preventDefault();
        if (this.state.strikes < 2) {
            this.setState({
                strikes: this.state.strikes + 1,
                type: 'Foul Ball!'
            })
        } else if (this.state.strikes === 2) { 
            this.setState({
                type: 'Foul Ball! Way to stay alive!'
            })
         }
    }

    strike = e => {
        e.preventDefault();
        if (this.state.strikes < 2) {
            this.setState({
                strikes: this.state.strikes + 1,
                type: `Strike ${this.state.strikes + 1}!`
            })
        } else if(this.state.strikes === 2){
            this.setState({
                strikes: 0,
                balls: 0,
                type: `Strike three, you're out!`
            })
        }
    }

    ball = e => {
        e.preventDefault();
        if (this.state.balls < 3) {
            this.setState({
                balls: this.state.balls + 1,
                type: `Ball ${this.state.balls + 1}!`
            })
        } else if (this.state.balls === 3) {
            this.setState({
                balls: 0,
                strikes: 0,
                type: 'Ball four, take your base!'
            })
        }
    }

    hit = e => {
        e.preventDefault();
        this.setState({
            balls: 0,
            strikes: 0,
            type: `Nice Hit!`
        })
    }

    //
    
    functionBoss(event){
        event.preventDefault();
        let funArr = [this.hit, this.ball, this.foulBall, this.strike]
        let randomFunc = funArr[Math.random() * funArr.length>>0]
        console.log(this.state)
        return randomFunc(event)
      }
    
  render() {
    return (
      <div>
        <h1>Count App</h1>
        <p><strong>{this.state.type}</strong></p>
        <p><strong>Strikes: </strong>{this.state.strikes}</p>
        <p><strong>Balls: </strong>{this.state.balls}</p>
        <button onClick={(event) => this.functionBoss(event)}>Throw a Pitch</button>
      </div>
    )
  }
}
