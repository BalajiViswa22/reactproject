import React, { Component } from 'react'
import Encomponent from './Hoc'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

  render() {
    return (
      <div>
      {this.props.name}
      <button onClick={this.inc}>Click{this.state.count}</button>
     
      </div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}
export default Encomponent(Counter);
