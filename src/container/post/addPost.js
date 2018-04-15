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

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPost
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);