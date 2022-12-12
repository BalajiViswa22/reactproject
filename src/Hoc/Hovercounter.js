import React, { Component } from 'react'

export default class Hovercounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
  render() {
    return (
      <div>
      <button onMouseOver={this.inc}>Clickme{this.state.count}</button>
      </div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}

