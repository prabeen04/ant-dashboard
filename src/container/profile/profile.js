import React, { Component } from 'react'
import ProfileList from './profileList'
import AddProfile from './addProfile'
import EditProfile from './editProfile'
import ProfileView from './profileView'
class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      isAddProfile: false,
      isEditProfile: false,
      isViewProfile: false,

    }
  }
  render() {
    return (
      <div className="profile-wrapper">
        <ProfileList/>
        {this.state.isAddProfile &&
           <AddProfile
           isAddProfile={this.state.isAddProfile}/>}
        <EditProfile/>
        <ProfileView/>
      </div>
    )
  }
}
export default Profile;