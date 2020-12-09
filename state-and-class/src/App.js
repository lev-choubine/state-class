import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()

    this.state = {
      count: 0
    }
    this.increment =this.increment.bind(this)
  }

increment () {
    const currentCount = this.state.count
    const newCount = currentCount + 1
    this.setState({ count: newCount})
  }
    render(){
      return (
        <div>
          窓の外雨は
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>+</button>
        </div>
      )
    }
 
  }



export default App;
