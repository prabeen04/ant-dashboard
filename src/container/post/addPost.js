import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { Field, withForm } from 'redux-form';

class AddPost extends Component {
  render() {
    return (
      <div>
        <h1>Add Post Component</h1>
      </div>
    )
  }
}

export default connect()(AddPost);