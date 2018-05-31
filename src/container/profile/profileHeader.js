import React, { Component } from 'react';
import './profile.css';
import { Icon } from 'antd';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="view-icons">
            <Icon type="appstore-o" style={{ fontSize: 25}} />
            <Icon type="profile" style={{ fontSize: 25, marginLeft: '0.5rem'}} />
        </div>
        <div className="setting-icons">
            <Icon type="setting" style={{ fontSize: 25}} />
        </div>
      </div>
    )
  }
}
export default ProfileHeader;