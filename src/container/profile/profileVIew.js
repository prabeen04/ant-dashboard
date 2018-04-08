import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProfileView extends Component {
  render() {
    return (
      <div className="profile-view">
       ProfileView
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}
export default connect( mapStateToProps, mapDispatchToProps )(ProfileView);