import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../actions/post_actions'

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
      return <h1> my posts</h1>
    })
    if (this.props.isLoading) {
      return <h4>Loading...</h4>
    }
    if (this.props.isError) {
      return <h4>Some Error Occoured...</h4>
    }
    return (
      <div>
        <h1>PostList Component Created</h1>
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