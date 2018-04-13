import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../actions/post_actions'

class PostList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('hghgjh')
    this.props.getPosts();
  }
  render() {
    return (
      <div>
        <h1>PostList Component Created</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    posts: state.postReducer.posts
  }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
      getPosts
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);