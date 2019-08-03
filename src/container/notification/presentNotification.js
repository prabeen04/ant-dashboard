import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPresentNotifications } from '../../actions/notificationActions';
import { List, Avatar, Spin } from 'antd';
import { InfiniteScroll } from 'react-infinite-scroller';

function PresentNotification(props) {
  useEffect(() => {
      props.getPresentNotifications()
  }, [])
  return (
    <React.Fragment>
      <List
        dataSource={props.presentNotifications.results}
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
        {props.isFetching && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
      </List>
    </React.Fragment>
  )
}
const mapStateToProps = ({ notificationReducer }) => ({
  isFetching: notificationReducer.isFetching,
  presentNotifications: notificationReducer.presentNotifications,
})
const mapDispatchToProps = dispatch => bindActionCreators({ getPresentNotifications }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PresentNotification);