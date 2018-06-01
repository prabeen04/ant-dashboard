import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSingleProfile } from '../../actions/profile_actions'
import '../post/post.css';
import { Card } from 'antd';
const { Meta } = Card;

class ProfileCard extends Component {
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
            // <div>
            //     <Card
            //         hoverable
            //         style={{ width: 155, height: 200, margin: '0.5rem' }}
            //         onClick={() => this.props.getSingleProfile(this.props.user)}
            //         cover={<img style={{ width: '100%', height: 150 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            //         <Meta
            //             title={this.props.user.name}
            //             style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25px' }}
            //         />
            //     </Card>
            // </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSingleProfile
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);