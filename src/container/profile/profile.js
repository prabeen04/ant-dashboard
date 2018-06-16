import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileList from './profileList';
import AddProfile from './addProfile';
import EditProfile from './editProfile';
import ProfileView from './profileView';
import ProfileHeader from './profileHeader';
import PaginationComponent from '../../components/common/pagination/pagination';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="pr">
      <ProfileHeader />
      <div className="profile-wrapper">
        <div className="profile-view">
          <ProfileList />
          <PaginationComponent />
        </div>
        <div className="profile-action">
          {props.showAddProfile && <AddProfile />}
          {props.showEditProfile && <EditProfile />}
          {props.showViewProfile && <ProfileView />}
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.profileReducer.isLoading,
    isError: state.profileReducer.isError,
    showAddProfile: state.profileReducer.showAddProfile,
    showEditProfile: state.profileReducer.showEditProfile,
    showViewProfile: state.profileReducer.showViewProfile
  }
}
export default connect(mapStateToProps)(Profile);