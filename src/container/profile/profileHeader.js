import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './profile.css';
import { Icon, Tooltip, Input, Button } from 'antd';
import { setFilterText, setViewType, showAddProfile, setSortKey } from '../../actions/profile_actions';
import SettingPopover from '../../components/popover/settingPopover';
const Search = Input.Search;
class ProfileHeader extends Component {
    render() {
        return (
            <div className="profile-header">
                <div className="view-icons">
                    <Tooltip title="Grid View">
                        <Icon
                            style={{ fontSize: 25, cursor: 'pointer' }}
                            type="appstore-o"
                            onClick={() => this.props.setViewType('GRID')}
                        />
                    </Tooltip>
                    <Tooltip title="List View">
                        <Icon
                            style={{ fontSize: 25, marginLeft: '0.5rem', marginRight: '1rem', cursor: 'pointer' }}
                            type="profile"
                            onClick={() => this.props.setViewType('LIST')}

                        />
                    </Tooltip>

                    {this.props.sortKey === 'DESC'
                        ? <Tooltip title="Sort by Ascending">
                            <div onClick={() => this.props.setSortKey('ASC')}>
                                <i class="fas fa-sort-alpha-down"
                                    style={{ fontSize: 25, marginLeft: '0.5rem', marginRight: '1rem', cursor: 'pointer' }}

                                ></i>
                            </div>
                        </Tooltip>
                        : <Tooltip title="Sort by Descending">
                            <div onClick={() => this.props.setSortKey('DESC')}>
                                <i class="fas fa-sort-alpha-up"
                                    style={{ fontSize: 25, marginLeft: '0.5rem', marginRight: '1rem', cursor: 'pointer' }}
                                ></i>
                            </div>
                        </Tooltip>}
                    {this.props.viewType === 'LIST' && <Tooltip title="Add Profile">
                        <Button
                            type="primary"
                            icon="plus"
                            onClick={() => this.props.showAddProfile()}
                        >
                            Add Profile</Button>
                    </Tooltip>}

                </div>
                <div className="setting-icons">
                    <Search
                        placeholder="Search Profile"
                        onSearch={value => this.props.setFilterText(value)}
                        style={{ marginRight: '1rem' }}
                        className="filter-text-input"
                        onChange={(e) => {
                            console.log(e.target.value)
                            this.props.setFilterText(e.target.value)
                        }}
                    />
                    <SettingPopover />
                </div>
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
export default connect(mapStateToProps, mapDispatchProps)(ProfileHeader);