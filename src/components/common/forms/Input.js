import React, { Component } from 'react'

class TextInput extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <input type="text" placeholder="my Placeholder"/>
      </div>
    )
  }
}
export default TextInput;