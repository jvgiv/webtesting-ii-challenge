import React, { Component } from 'react'
import Dashboard from './Dashboard'

export default class Display extends Component {
constructor(props) {
  super(props)

  this.state = {
    strikes: 0,
    balls: 0,
    type: ''
  }
  this.hit = this.hit.bind(this)
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

    
    
    functionBoss(event){
        event.preventDefault();
        console.log(this.hit)
        let funArr = [this.hit, this.ball, this.foulBall, this.strike]
        console.log(funArr)
        let randomFunc = funArr[Math.floor(Math.random() * funArr.length)]
        console.log(randomFunc)
        return randomFunc(event)
      }
    
  render() {
      
    return (
      <div>
        <h1>Count App</h1>
        <p><strong>{this.state.type}</strong></p>
        <p><strong>Strikes: </strong>{this.state.strikes}</p>
        <p><strong>Balls: </strong>{this.state.balls}</p>
        {/* <button onClick={(event) => this.functionBoss(event)}>Throw a Pitch</button> */}
        <Dashboard functionBoss={this.functionBoss} hit={this.hit} ball={this.ball} foulBall={this.foulBall} strike={this.strike} /> 
      </div>
    )
  }
}
