import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './forms.css';
/* 
Custom Text Input
*/
class TextInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{marginBottom: 10}}>
        <input type="text" {...this.props} className="text-input"/>
      </div>
    )
  }
}
export default TextInput;
