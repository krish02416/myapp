import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"We are in State"
      }
    }
    changeState(){
        this.setState({
            message:" We are in new State"
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>{this.props.name}</p>
        <button onClick={()=>this.changeState()}>Click here to change</button>
      </div>
    )
  }
}

export default Message