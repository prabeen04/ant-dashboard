import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../../actions/post_actions'
import { Input, Icon, Card, Button, Modal } from 'antd'
const { TextArea } = Input

class AddPost extends Component {
  constructor(props) {
    super(props)

    this.renderInput = this.renderInput.bind(this);
    this.renderTextarea = this.renderTextarea.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = (values) => {
    console.log(values)
    this.props.handlePostSubmit(values);
  }
  renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (
    <div>
      <Input
        placeholder={label}
        {...input}
        {...custom}
      />
      {touched && error && <span>{error}</span>}
    </div>
  )
  renderTextarea = ({ input, label, type, meta: { touched, error }, ...custom }) => (
    <div>
      <TextArea
        placeholder={label}
        rows={5}
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
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div>
        <form>
          <Field name="title" label="Enter Post Title" component={this.renderInput} />
          <Field name="author" label="Who are you" component={this.renderInput} />
          <Field name="body" label="Post your story" component={this.renderTextarea} />
          <Button onClick={handleSubmit(this.onSubmit)} title="AddPost"/>
        </form>

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
AddPost = connect(mapStateToProps, mapDispatchToProps)(AddPost)
export default reduxForm({
  form: 'addPostForm'
})(AddPost);