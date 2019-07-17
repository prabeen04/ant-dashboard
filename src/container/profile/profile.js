import React from 'react';
import { connect, useSelector } from 'react-redux';
import ProfileList from './profileList';
import AddProfile from './addProfile';
import EditProfile from './editProfile';
import ProfileView from './profileView';
import ProfileActionHeaderLeft from './ProfileActionHeaderLeft';
import ProfileActionHeaderRight from "./ProfileActionHeaderRight";
import ActionHeader from '../../components/layouts/ActionHeader';
import './profile.css';
import { MainWrapper } from "../../components/UI/Layout";

const Profile = (props) => {
  const { showAddProfile, showEditProfile, showViewProfile } = useSelector(({ profileReducer }) => ({
    showAddProfile: profileReducer.showAddProfile,
    showEditProfile: profileReducer.showEditProfile,
    showViewProfile: profileReducer.showViewProfile
  }))
  console.log(props)
  return (
    <React.Fragment>
      <ActionHeader
        leftComponent={<ProfileActionHeaderLeft />}
        rightComponent={<ProfileActionHeaderRight />}
      />
      <div className="profile-wrapper">
        <div className="profile-view">
          <MainWrapper>
            <ProfileList />
          </MainWrapper>
        </div>
        <div className="profile-action">
          {showAddProfile && <AddProfile />}
          {showEditProfile && <EditProfile />}
          {showViewProfile && <ProfileView />}
        </div>
      </div>
    </React.Fragment>

  )
}
export default Profile;
