import React, { Component } from 'react'

class ExampleForm extends Component {
    constructor(props){
        super(props)
       this.state = {
           fields: [1, 2],

       } 
    }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>ExampleForm Component</h2>
        <button onClick={(e)=>this.handleClick(e)}>Add</button>
      </div>
    )
  }
}

export default ExampleForm;