import React, { Component } from 'react'
import { connent } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSinglepost } from '../../actions/post_actions';

class SinglePost extends Component {
  render() {
    return (
      <div>
        <h3>Single post Component</h3>
      </div>
    )
  }
}

const mapStateToProps =(state ) =>{
    return {
        singlePost: state.postReducer.singlePost
    }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getsinglePost
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);