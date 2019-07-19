import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Icon } from 'antd'
import { MainWrapper, StyledActionHeader } from '../../components/UI/Layout'

function SinglePost({ history, location }) {
  const singlePost = useSelector((state) => state.postReducer.singlePost)
  return (
    <div>
      <StyledActionHeader>
        <Button
          type="primary"
          icon="rollback"
          onClick={() => history.goBack()}>
          Back </Button>
        <Button
          type="primary"
          icon="edit">
          Edit Post</Button>
      </StyledActionHeader>
      <MainWrapper>
        <div className="single-post">
          <h3>{singlePost.title || location.state.post.title}</h3>
          <h3>{singlePost.author || location.state.post.author}</h3>
          <h3>{singlePost.date || location.state.post.date}</h3>
          <p>{singlePost.body || location.state.post.body}</p>
        </div>
      </MainWrapper>
    </div>

  )
}
export default withRouter(SinglePost);