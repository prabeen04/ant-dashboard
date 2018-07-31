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
      <div>
        <input type="text" {...this.props} />
      </div>
    )
  }
}
export default TextInput;