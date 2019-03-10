import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Button, Checkbox, Avatar } from 'antd';

function PastNotification(props) {
    return (
        <div>
            <List
                size="small"
                bordered
                dataSource={props.pastNotifications}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

const mapStateToProps = ({ notificationReducer }) => ({
    pastNotifications: notificationReducer.pastNotifications
})
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PastNotification);