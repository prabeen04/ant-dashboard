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

class ProfileCard extends Component {
    constructor(props) {
        super(props)


    }
    loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(src);
            image.onerror = err => reject(err);
            image.src = src;
        });
    }
    render() {
        return (
            <div className={this.props.activatedProfile.name === this.props.user.name ? 'activated-profile' : ''}>
                <Card
                    hoverable
                    style={{ width: 155, height: 200, margin: '0.5rem' }}
                    onClick={() => this.props.getSingleProfile(this.props.user)}
                    cover={
                        // <img style={{ width: '100%', height: 150, filter: 'blur(6px)' }} alt="example" src={Preview} />
                        <ProgressiveImage
                            preview={Preview}
                            image={imgUrl}
                            width={'100%'}
                            height={150}
                        />
                    }>
                    <Meta
                        title={this.props.user.name}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25px' }}
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