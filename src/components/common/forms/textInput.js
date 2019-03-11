import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './forms.css';
/* 
Custom Text Input
*/

export default function TextInput(props) {
  return (
    <div style={{ marginBottom: 10 }}>
      <input type="text" {...props} className="text-input" />
    </div>
  )
}

