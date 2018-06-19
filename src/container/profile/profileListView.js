import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSingleProfile } from '../../actions/profile_actions'
import '../post/post.css';
import { Card, Icon } from 'antd';
const { Meta } = Card;

class ProfileListView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="post-row " onClick={() => this.props.getSingleProfile(this.props.user)}>
                <div className="post-title">
                    <Icon type="idcard" className="post-icon" /> &nbsp;&nbsp;&nbsp;{this.props.user.name}
                </div>
                <div className="post-title">
                    <Icon type="user" className="post-icon" /> &nbsp;&nbsp;&nbsp;{this.props.user.email}
                </div>
                <div className="post-title">
                    <Icon type="clock-circle-o" className="post-icon" /> &nbsp;&nbsp;&nbsp;{this.props.user.location}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        activatedProfile: state.profileReducer.singleProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSingleProfile
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileListView);