import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
        name:"balaji"

         
        
      }
    }
   render() {
    return(
      <div>
        <h1>
          <button on click={this.setState({count:this.state.count+1})}>ClickMe</button>
        </h1>
      </div>
    )
   }
  }
    
 