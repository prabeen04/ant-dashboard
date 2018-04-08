import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSingleProfile } from '../../actions/profile_actions'
import { Card } from 'antd';
const { Meta } = Card;

class ProfileCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 150, height: 200 }}
                    onClick={this.props.getSingleProfile(this.props._id)}
                    cover={<img style={{ width: '100%', height: 150 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta
                        title={this.props.name}
                    />
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
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