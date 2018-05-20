import React, { Component } from 'react'

class ExampleForm extends Component {
    constructor(props){
        super(props)
       this.state = {
           fields: [1, 2],

       } 
       this.handleClick = this.handleClick.bind(this)
    }
  
  handleClick = (e) =>{
      console.log(e)
      this.state.fields.push('one')
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