import React, { Component, useState } from 'react';
import styled from 'styled-components';
import AddPost from "./addPost";
import PostList from './postList';
import { Button, Icon, Modal } from 'antd';
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

export default Post;