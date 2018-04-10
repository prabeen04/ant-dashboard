import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileList from './profileList'
import AddProfile from './addProfile'
import EditProfile from './editProfile'
import ProfileView from './profileView'
class Profile extends Component {
  render() {
    return (
      <div className="profile-wrapper">
        <ProfileList/>
        <AddProfile/>
        <EditProfile/>
        <ProfileView/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    showAddProfile: state.profileReducer.showAddProfile,
    showEditProfile: state.profileReducer.showEditProfile,
    showViewProfile: state.profileReducer.showViewProfile
  }
}
export default connect(mapStateToProps)(Profile);