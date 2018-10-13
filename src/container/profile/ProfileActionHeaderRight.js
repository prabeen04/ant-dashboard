import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Tooltip, Button } from 'antd';
import { Input } from "../../components/UI/Elements";
import { setFilterText, setViewType, showAddProfile, setSortKey } from '../../actions/profile_actions';
import SettingPopover from '../../components/popover/settingPopover';
import './profile.css';
// const Search = Input.Search;
class ProfileActionHeaderRight extends Component {
    render() {
        return (
                <div className="setting-icons">
                    <Input
                        placeholder="Search Profile"
                        onSearch={value => this.props.setFilterText(value)}
                        style={{ marginRight: '1rem' }}
                        // className="filter-text-input"
                        onChange={(e) => {
                            console.log(e.target.value)
                            this.props.setFilterText(e.target.value)
                        }}
                    />
                    <SettingPopover />
                </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        viewType: state.profileReducer.viewType,
        sortKey: state.profileReducer.sortKey
    }
}
const mapDispatchProps = dispatch => {
    return bindActionCreators({
        setFilterText,
        setViewType,
        showAddProfile,
        setSortKey
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchProps)(ProfileActionHeaderRight);