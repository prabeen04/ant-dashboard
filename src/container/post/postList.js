import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../actions/post_actions'

class PostList extends Component {
  constructor(props){
    super(props)
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

}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
      getPosts
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);