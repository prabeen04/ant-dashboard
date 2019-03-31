import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Icon, Card } from 'antd'
import { getPosts, getSinglePost } from '../../actions/post_actions'
import './post.css'
import moment from 'moment'

const PostRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: rgb(126, 123, 141);
  /* background: #ffffff; */
  font-weight: 500;
  padding: 0.8rem 1rem;
  margin: 0.1rem 0.5rem;
  border-radius: 0.15rem;
  box-shadow: 0 2px 6px 1px #ccc;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
`
class PostList extends Component {
  constructor(props) {
    super(props)
    this.getSinglePost = this.getSinglePost.bind(this);
  }
  componentDidMount() {
    console.log('hghgjh')
    this.props.getPosts();
  }

  getSinglePost = (post) => {
    this.props.getSinglePost(post);
    this.props.history.push({
      pathname: `/post/${post._id}`,
      state: { post: post }
    })
  }
  render() {
    let renderPost = this.props.posts.map(post => {
      return <PostRow key={post._id}  onClick={() => this.getSinglePost(post)}>
        <div className="post-title">
          <Icon type="idcard" className="post-icon" /> &nbsp;&nbsp;&nbsp;{post.title}
        </div>
        <div className="post-title">
          <Icon type="user" className="post-icon" /> &nbsp;&nbsp;&nbsp;{post.author}
        </div>
        <div className="post-title">
          <Icon type="clock-circle-o" className="post-icon" /> &nbsp;&nbsp;&nbsp;{moment(post.date).fromNow()}
        </div>
      </PostRow>
    })

    if (this.props.isLoading) {
      return <Card loading style={{ height: '400px' }}></Card>
    }
    if (this.props.isError) {
      return <h4>Some Error Occoured...</h4>
    }
    return (
      <div>
        {renderPost}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.postReducer.isLoading,
    isError: state.postReducer.isError,
    posts: state.postReducer.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPosts,
    getSinglePost
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));