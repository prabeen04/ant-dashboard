import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* 
Custom Text Input
*/
class TextInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(PropTypes)
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder} />
      </div>
    )
  }
}
export default TextInput;