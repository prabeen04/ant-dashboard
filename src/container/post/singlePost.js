import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Button, Icon } from 'antd'
import { getSinglePost } from '../../actions/post_actions'
import EditDrawer from "./editDrawer";

const SinglePost = (props) => {
  return (
    <div>
      <div className="post-actions">
        <Button type="primary" icon="rollback"
          onClick={() => props.history.goBack()}
        >Back to Posts</Button>
        <Button
          type="primary"
          icon="edit" >
          Edit Post</Button>
      </div>
      <div className="single-post">
        <h3>{props.singlePost.title || props.location.state.post.title}</h3>
        <h3>{props.singlePost.author || props.location.state.post.author}</h3>
        <h3>{props.singlePost.date || props.location.state.post.date}</h3>
        <p>{props.singlePost.body || props.location.state.post.body}</p>
      </div>
      <EditDrawer/>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    singlePost: state.postReducer.singlePost
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSinglePost
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost));