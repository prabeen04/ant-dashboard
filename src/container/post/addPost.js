import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../../actions/post_actions'
import { Input, Modal } from 'antd'
const { TextArea } = Input

function AddPost(props) {
  const { handleSubmit } = props
  function onSubmit(values) {
    console.log(values)
    props.addPost(values)
    props.setIsModalOpen(false)
  }
  function renderInput({ input, label, type, meta: { touched, error }, ...custom }) {
    return (
      <div>
        <Input
          placeholder={label}
          {...input}
          {...custom}
        />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  function renderTextarea({ input, label, type, meta: { touched, error }, ...custom }) {
    return (
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
  }
  return (
    <div>
      <form>
        <Modal
          title="Speak your mind"
          maskClosable={true}
          wrapClassName="vertical-center-modal"
          visible={props.isModalOpen}
          okText="AddPost"
          onOk={handleSubmit(onSubmit)}
          onCancel={() => props.setIsModalOpen(false)}
        >
          <Field name="title" label="Enter Post Title" component={renderInput} />
          <Field name="author" label="Who are you" component={renderInput} />
          <Field name="body" label="Post your story" component={renderTextarea} />
        </Modal>
      </form>
    </div>
  )
}

const mapStateToProps = ({ postReducer }) => ({
  isLoading: postReducer.isLoading,
  isError: postReducer.isError
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ addPost }, dispatch)
AddPost = connect(mapStateToProps, mapDispatchToProps)(AddPost)
export default reduxForm({
  form: 'addPostForm'
})(AddPost);