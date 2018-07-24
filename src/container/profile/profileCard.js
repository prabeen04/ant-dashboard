import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSingleProfile } from '../../actions/profile_actions'
import { Card } from 'antd';
import Preview from './preview.jpg';
import './profile.css';
const { Meta } = Card;

class ProfileCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={this.props.activatedProfile.name === this.props.user.name ? 'activated-profile': ''}> 
                <Card
                    hoverable
                    style={{ width: 155, height: 200, margin: '0.5rem' }}
                    onClick={() => this.props.getSingleProfile(this.props.user)}
                    cover={<img style={{ width: '100%', height: 150, filter: 'blur(6px)' }} alt="example" src={Preview} />}>
                    <Meta
                        title={this.props.user.name}
                        style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '25px'}}
                    />
                </Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);