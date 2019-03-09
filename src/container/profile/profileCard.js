import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSingleProfile } from '../../actions/profile_actions'
import { Card } from 'antd';
import ProgressiveImage from '../../components/image/progressiveImage';
import Preview from './preview.jpg';
import LargeImage from './largeImage.jpeg';
import './profile.css';
const { Meta } = Card;
const imgUrl = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';

function ProfileCard(props) {
    return (
        <div className={props.activatedProfile.name === props.user.name ? 'activated-profile' : ''}>
            <Card
                hoverable
                style={{ width: 155, height: 200, margin: '0.5rem' }}
                onClick={() => props.getSingleProfile(props.user)}
                cover={
                    <ProgressiveImage
                        preview={Preview}
                        image={imgUrl}
                        width={'100%'}
                        height={150}
                    />
                }>
                <Meta
                    title={props.user.name}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25px' }}
                />
            </Card>
        </div>
    )
}
const mapStateToProps = ({ profileReducer }) => ({
    profile: profileReducer.profile,
    activatedProfile: profileReducer.singleProfile
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getSingleProfile
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);