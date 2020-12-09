import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()

    this.state = {
      count: 0,
      inputtedNumber: 0
    }
    // this.increment =this.increment.bind(this)
  }

increment =()=> {
   
   const newCount = this.state.count + this.state.inputtedNumber;
   this.setState({count: newCount})
  }
  decrease =()=> {
    
    const newCount = this.state.count -  this.state.inputtedNumber;
    this.setState({ count: newCount})
  }

  changeInput= (evt) => {
        let newValue = parseInt(evt.target.value || 0)
       
        this.setState({inputtedNumber: newValue})
  }
    render(){
      return (
        <div>
          窓の外雨は
          <h1>{this.state.count}</h1>
          <input  value={this.state.inputtedNumber}  onChange={this.changeInput}/>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      )
    }
 
  }



export default App;
