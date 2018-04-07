import React, { Component } from 'react'
import ProfileCard from './profileCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfiles, addProfile } from '../../actions/profile_actions';

class ProfileList extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getProfiles()
    }
    render() {
        return (
            <div>
                ProfileList
       <ProfileCard />
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