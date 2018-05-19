import React, { Component } from 'react'

class ExampleForm extends Component {
    constructor(props){
        super(props)
       this.state = {
           fields: [],

       } 
       this.handleClick = this.handleClick.bind(this)
    }
  
  handleClick = (e) =>{
      console.log(e)
  } 
  render() {
    return (
      <div>
        <h2>ExampleForm Component</h2>
        <button onClick={(e)=>this.handleClick(e)}>Add</button>
      </div>
    )
  }
}

export default ExampleForm;