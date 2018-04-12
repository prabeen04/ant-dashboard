import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd';
import ProfileList from './profileList'
import AddProfile from './addProfile'
import EditProfile from './editProfile'
import ProfileView from './profileView'
import './profile.css'

class Profile extends Component {
  render() {
    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center' }}>
          <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
  }
  if (this.props.isError) {
      return (<p>Some Error occoured...</p>)
  }
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