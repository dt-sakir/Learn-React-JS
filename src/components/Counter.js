import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 10
      }
    }

  render() {
      const {count} = this.state
    return (
      <div>
          <h1>Counter: {count}</h1>
          <button onClick={this.incrementFunction}>Increment</button>
          <button onClick={this.decrementFunction} disabled={count===0 ? true : false}>Decrement</button>
      </div>
    )
  }

  incrementFunction = () => {
      this.setState({
        count: this.state.count + 1
      });
  }

  decrementFunction = () => {
      this.setState({
        count: this.state.count - 1
      });
  }
}
