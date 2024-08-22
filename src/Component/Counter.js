import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  increment() {
    this.setState(previous => ({
      count: previous.count + 1
    }), () => console.log("callback value:" + this.state.count))
    console.log(this.state.count);
  }


  decrement() {
    this.setState({
      count: this.state.count - 1
    }, () => { console.log("callback value:" + this.state.count) })
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  reset() {
    this.setState((value) => ({
      count: value.count = 0
    })

    )
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={() => { this.decrement() }}>decrement</button>
        <button onClick={() => this.reset()}>RESET</button>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
