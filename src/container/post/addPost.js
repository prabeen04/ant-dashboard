import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { Field, withForm } from 'redux-form';
import { addPost } from '../../actions/post_actions'
import { Icon, Card, Button } from 'antd'

class AddPost extends Component {
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.isLoading){
      return <h4>Loading...</h4>
    }
    if(this.props.isError){
      return <h4>Oops... Something went wrong!!!</h4>
    }
    return (
      <div>
        <h1>Add Post Component</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.postReducer.isLoading,
    isError: state.postReducer.isError
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPost
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);