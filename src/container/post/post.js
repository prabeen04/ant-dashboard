import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import AddPost from "./addPost";
import PostList from './postList';
import { Button, Icon, Modal } from 'antd';
import { addPost } from '../../actions/post_actions';
import './post.css'

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="post-wrapper">
      <div className="post-actions">
        <Button type="primary" icon="filter" >Filter</Button>
        <Button
          type="primary"
          icon="plus"
          onClick={() => setIsModalOpen(true)}>
          Add Post</Button>
      </div>

      <AddPost
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
      <PostList />
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPost
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(Post);