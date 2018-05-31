import React, { Component } from 'react';
import './profile.css';
import { Icon, Tooltip } from 'antd';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="view-icons">
        <Tooltip title="Grid View">
            <Icon type="appstore-o" style={{ fontSize: 25}} />
            </Tooltip>
            <Tooltip title="List View">
            <Icon type="profile" style={{ fontSize: 25, marginLeft: '0.5rem'}} />
            </Tooltip>
        </div>
        <div className="setting-icons">
        <Tooltip title="Settings">
            <Icon type="setting" style={{ fontSize: 25}} />
            </Tooltip>
        </div>
      </div>
    )
  }
}
export default ProfileHeader;