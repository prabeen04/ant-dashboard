import React, { Component } from 'react'
import ProfileCard from './profileCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'antd';
import { getProfiles, addProfile } from '../../actions/profile_actions';

class ProfileList extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getProfiles()
    }

    render() {

        if (this.props.isLoading) {
            return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center' }}>
                <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
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
            <div className="flex-container" style={{justifyContent: 'flex-start'}}>
                {renderCard}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.profileReducer.isLoading,
        isError: state.profileReducer.isError,
        profiles: state.profileReducer.profiles
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProfiles,
        addProfile
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);