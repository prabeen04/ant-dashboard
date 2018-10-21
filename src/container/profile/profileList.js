import React, { Component } from 'react';
import ProfileCard from './profileCard';
import ProfileListView from './profileListView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Card, Button  } from 'antd';
import { getProfiles, addProfile, showAddProfile } from '../../actions/profile_actions';
import { getProfilesState } from '../../selectors/demoSelector';
import MainWrapper from '../../components/UI/Elements/MainWrapper'
import { StyledCodeSkeleton } from "../../components/UI/Elements";
import './profile.css';

class ProfileList extends Component {
    componentDidMount() {
        this.props.getProfiles()
    }

    render() {

        if (this.props.isLoading) {
             return(<StyledCodeSkeleton />)
        }
        if (this.props.isError) {
            return (<h2>Some Error Occoured</h2>)
        }

        let renderCard = this.props.profiles
            .sort((a, b) =>{ 
             return   this.props.sortKey === 'ASC'
                ?  a.name > b.name
                :  a.name < b.name
            })
            .map(profile => {
            if (this.props.viewType === 'GRID') {
                return <ProfileCard
                    key={profile._id}
                    user={profile}
                />
            }
            if (this.props.viewType === 'LIST') {
                return <ProfileListView key={profile._id} user={profile}/>
            }


        })
        return (
            <div className={this.props.viewType === 'GRID'? 'profile-grid-view' :'profile-list-view'} >
               {this.props.viewType === 'GRID' && <div className="flex-container"
                    style={{ width: 155, height: 200, margin: '0.5rem', justifyContent: 'center', backgroundColor: '#fff', cursor: 'pointer' }}
                    onClick={() => this.props.showAddProfile()}
                >
                    <Icon type="user-add" style={{ fontSize: '10rem', color: '#444' }} />
                </div>}
                {renderCard}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.profileReducer.isLoading,
        isError: state.profileReducer.isError,
        viewType: state.profileReducer.viewType,
        sortKey: state.profileReducer.sortKey,
        profiles: getProfilesState(state, state.profileReducer.filterText)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProfiles,
        addProfile,
        showAddProfile
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);