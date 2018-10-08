import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Icon, Avatar } from 'antd'
import { openEditProfile } from '../../actions/profile_actions';
import ProfileDrawer from './profileDrawer';
import MainWrapper from '../../components/UI/Elements/MainWrapper'
const { Meta } = Card;

class ProfileView extends Component {
  state = {
    isDrawerOpen: false
  }

  showDrawer = () => {
    this.setState({
      isDrawerOpen: true,
    });
  };
  onClose = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };
  render() {
    return (
      <MainWrapper dark>
        {this.props.profile.name &&
          <div>

            <div className="panel-header">
              <h3>{this.props.profile.name}</h3>
            </div>
            <Card
              style={{ width: '100%' }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[
                <Icon onClick={() => this.showDrawer()} type="setting" />,
                <Icon type="edit" onClick={() => this.props.openEditProfile(this.props.profile)} />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={this.props.profile.name}
                description={this.props.profile.email}
              />
            </Card>
          </div>

        }
        <ProfileDrawer open={this.state.isDrawerOpen} onClose={this.onClose} user={this.props.profile}/>
      </MainWrapper>
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
    openEditProfile
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);