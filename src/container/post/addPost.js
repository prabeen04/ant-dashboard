import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, withForm } from 'redux-form';
import { addPost } from '../../actions/post_actions'
import { Input, Icon, Card, Button } from 'antd'

class AddPost extends Component {
  constructor(props) {
    super(props)
  }

  renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (
    <div>
      <Input
        placeholder={label}
        className="semantic-input"
        fluid={true}
        {...input}
        {...custom}
      />
      {touched && error && <span>{error}</span>}
    </div>
  )
  renderTextarea = ({ input, label, type, meta: { touched, error }, ...custom }) => (
    <div>
      <Form.Field
        placeholder={label}
        className="semantic-input"
        control={TextArea}
        siz="large"
        {...input}
        {...custom}
      />
      {touched && error && <span>{error}</span>}
    </div>
  )
  render() {
    if (this.props.isLoading) {
      return <h4>Loading...</h4>
    }
    if (this.props.isError) {
      return <h4>Oops... Something went wrong!!!</h4>
    }
    return (
      <div>
        <h1>Add Post Component</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.postReducer.isLoading,
    isError: state.postReducer.isError
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPost
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);