import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'antd'
import { getPosts } from '../../actions/post_actions'
import './post.css'

class PostList extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('hghgjh')
    this.props.getPosts();
  }
   

  render() {
 let renderPost = this.props.posts.map(post => {
      return <div key={post._id} className="post-row"> 
        <div className="post-title"><Icon type="idcard"/> &nbsp;&nbsp;&nbsp;{post.title}</div>
        <div className="post-title"><Icon type="user"/> &nbsp;&nbsp;&nbsp;{post.author}</div>
        <div className="post-title"><Icon type="clock-circle-o"/> &nbsp;&nbsp;&nbsp;{post.date}</div>
      </div>
    })

    if (this.props.isLoading) {
      return <h4>Loading...</h4>
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
    getPosts
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);