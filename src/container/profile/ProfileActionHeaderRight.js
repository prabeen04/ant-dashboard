import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Tooltip, Button } from 'antd';
import { Input } from "../../components/UI/Elements";
import { setFilterText, setViewType, showAddProfile, setSortKey } from '../../actions/profile_actions';
import SettingPopover from '../../components/popover/settingPopover';
import './profile.css';

function ProfileActionHeaderRight(props) {
    return (
        <div className="setting-icons">
            <Input
                placeholder="Search Profile"
                onSearch={value => props.setFilterText(value)}
                style={{ marginRight: '1rem' }}
                onChange={(e) => {
                    props.setFilterText(e.target.value)
                }}
            />
        </div>
    )
}
const mapStateToProps = ({ profileReducer }) => ({
    viewType: profileReducer.viewType,
    sortKey: profileReducer.sortKey
})
const mapDispatchProps = dispatch => bindActionCreators({
    setFilterText,
    setViewType,
    showAddProfile,
    setSortKey
}, dispatch)
export default connect(mapStateToProps, mapDispatchProps)(ProfileActionHeaderRight);