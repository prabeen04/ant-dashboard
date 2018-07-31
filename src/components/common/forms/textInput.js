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
    return (
      <div style={style.input}>
        <input type="text" {...this.props} />
      </div>
    )
  }
}
export default TextInput;
const styles: {
  input: {
    backgroundColor: 'red'
  }
}