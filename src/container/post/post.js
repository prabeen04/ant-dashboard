import React, { Component } from 'react';
import AddPost from "./addPost";
import PostList from './postList';
import { Button, Icon } from 'antd';
import './post.css'

class Post extends Component {
  render() {
    return (
      <div className="post-wrapper">
        <div className="post-actions">
        <Button type="primary" icon="plus" >Add Post</Button>
        </div>
        <AddPost/>
        <PostList/>
      </div>
    )
  }
}

export default Post;