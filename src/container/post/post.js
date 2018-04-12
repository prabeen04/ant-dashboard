import React, { Component } from 'react'
import AddPost from "./addPost";
import './post.css'

class Post extends Component {
  render() {
    return (
      <div className="post-wrapper">
        <h1>Post component</h1>
        <AddPost/>
      </div>
    )
  }
}

export default Post;