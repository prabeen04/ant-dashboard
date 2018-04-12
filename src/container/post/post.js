import React, { Component } from 'react'
import AddPost from "./addPost";
import PostList from './postList';
import './post.css'

class Post extends Component {
  render() {
    return (
      <div className="post-wrapper">
        <h1>Post component</h1>
        <AddPost/>
        <PostList/>
      </div>
    )
  }
}

export default Post;