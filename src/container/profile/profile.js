import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileList from './profileList'
import AddProfile from './addProfile'
import EditProfile from './editProfile'
import ProfileView from './profileView'
import './profile.css'

class Profile extends Component {
  render() {
    
    return (
      <div className="profile-wrapper">

        <ProfileList />
        <div className="profile-action">
          {this.props.showAddProfile && <AddProfile />}
          {this.props.showEditProfile && <EditProfile />}
          {this.props.showViewProfile && <ProfileView />}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.profileReducer)
  return {
    isLoading: state.profileReducer.isLoading,
    isError: state.profileReducer.isError,
    showAddProfile: state.profileReducer.showAddProfile,
    showEditProfile: state.profileReducer.showEditProfile,
    showViewProfile: state.profileReducer.showViewProfile
  }
}
export default connect(mapStateToProps)(Profile);