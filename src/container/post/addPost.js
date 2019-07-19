import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../../actions/post_actions'
import { Input, Modal } from 'antd'
const { TextArea } = Input

class AddPost extends Component {
  onSubmit = (values) => {
    console.log(values)
    this.props.addPost(values)
    this.props.setIsModalOpen(false)
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
    const { handleSubmit } = this.props
    return (
      <div>
        <form>
          <Modal
            title="Speak your mind"
            maskClosable={true}
            wrapClassName="vertical-center-modal"
            visible={this.props.isModalOpen}
            okText="AddPost"
            onOk={handleSubmit(this.onSubmit)}
            onCancel={() => this.props.setIsModalOpen(false)}
          >
            <Field name="title" label="Enter Post Title" component={this.renderInput} />
            <Field name="author" label="Who are you" component={this.renderInput} />
            <Field name="body" label="Post your story" component={this.renderTextarea} />
          </Modal>
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