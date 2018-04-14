import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom' 
import { getSinglePost } from '../../actions/post_actions'

class SinglePost extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>{this.props.singlePost.title}</h3>
        <h3>{this.props.singlePost.author}</h3>
        <h3>{this.props.singlePost.date}</h3>
        <h3>{this.props.singlePost.body}</h3>
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
        getSinglePost
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost));