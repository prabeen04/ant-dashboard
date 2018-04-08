import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProfileView extends Component {
  render() {
    return (
      <div className="profile-view">
      profile view
      {this.props.profile.name && <h1>{this.props.profile.name}</h1>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.singleProfile
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}
export default connect( mapStateToProps, mapDispatchToProps )(ProfileView);