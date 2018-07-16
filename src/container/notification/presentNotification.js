import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPresentNotifications } from '../../actions/notificationActions';
import { List, Avatar, Spin } from 'antd';
import { InfiniteScroll } from 'react-infinite-scroller';

class PresentNotification extends Component {
  componentDidMount(){
    this.props.getPresentNotifications();
  }
  render() {
    return (
      <div>
        {/* {this.props.isFetching && <p>Loading...</p>} */}
        {/* <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          // loadMore={this.handleInfiniteOnLoad}
          // hasMore={!this.props.isFetching && this.state.hasMore}
          useWindow={false}
        > */}
          <List
            dataSource={this.props.presentNotifications.results}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.props.isFetching &&(
              <div style={{textAlign: 'center'}}>
                <Spin />
              </div>
            )}
          </List>
        {/* </InfiniteScroll> */}

      </div>
    )
  }
}
const mapStateToProps = state => {
 return{
   isFetching: state.notificationReducer.isFetching,
   presentNotifications: state.notificationReducer.presentNotifications,
 }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      getPresentNotifications
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PresentNotification);