import React, { Component } from 'react'
import ProfileCard from './profileCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Card } from 'antd';
import { getProfiles, addProfile, showAddProfile } from '../../actions/profile_actions';
import { getProfilesState } from '../../selectors/demoSelector';

class ProfileList extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getProfiles()
    }

    render() {

        if (this.props.isLoading) {
            return (<div className="flex-container profile-list" style={{ alignItems: 'flex-start' }}>
                <Card loading style={{ width: '100%'}}></Card>
            </div>)
        }
        if (this.props.isError) {
            return (<p>Some Error occoured...</p>)
        }

        let renderCard = this.props.profiles.map(profile =>{
            return <ProfileCard 
                key={profile._id}
                user={profile}
                />
        })  
        console.log(this.props.profiles)
        return (
            <div className="profile-list" style={{}}>
            <div className="flex-container" 
                 style={{width: 150, height: 200, justifyContent: 'center', backgroundColor: '#fff', cursor: 'pointer'}}
                 onClick={()=>this.props.showAddProfile()}
                 >
                <Icon type="plus" />
            </div>
            
                {renderCard}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log( state.profileReducer.filterText)
    return {
        isLoading: state.profileReducer.isLoading,
        isError: state.profileReducer.isError,
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