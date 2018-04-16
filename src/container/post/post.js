import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import AddPost from "./addPost";
import PostList from './postList';
import { Button, Icon, Modal } from 'antd';
import{ addPost } from '../../actions/post_actions';
import './post.css'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      isModalOpen: false
    }
    this.setIsModalOpen = this.setIsModalOpen.bind(this);
  }

  setIsModalOpen = (bool) =>{
    this.setState({
      isModalOpen: false
    })
  }
  render() {
    return (
      <div className="post-wrapper">
        <div className="post-actions">
        <Button type="primary" icon="filter" >Filter</Button>
        <Button 
              type="primary" 
              icon="plus" 
              onClick={()=>this.setState({isModalOpen: true})}>
              Add Post</Button>
        </div>
        
        <AddPost/>
        <PostList/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPost
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(Post);