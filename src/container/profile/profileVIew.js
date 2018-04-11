import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Icon, Avatar } from 'antd'
import { editProfile } from '../../actions/profile_actions'
const { Meta } = Card;

class ProfileView extends Component {
  render() {
    return (
      <div className="profile-view">
      {this.props.profile.name &&
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <Icon onClick={()=>console.log('settings clicked')} type="setting" />,
              <Icon type="edit" onClick={() => this.props.editProfile(this.props.profile)}/>, 
              <Icon type="ellipsis" />
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={this.props.profile.name}
              description={this.props.profile.email}
            />
          </Card>

        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.singleProfile
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editProfile
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);