import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFutureNotifications } from '../../actions/notificationActions';
import { List, Avatar, Spin } from 'antd';

function FutureNotification(props) {
  useEffect(() => {
    props.getFutureNotifications();
  }, [])
  return (
    <React.Fragment>
      <List
        dataSource={props.futureNotifications.results}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
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
  futureNotifications: notificationReducer.futureNotifications,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getFutureNotifications
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FutureNotification);