import React, { Component } from 'react'
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
export default Profile;