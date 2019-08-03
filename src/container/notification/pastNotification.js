import React from 'react';
import { useSelector } from 'react-redux';
import { List, Button, Checkbox, Avatar } from 'antd';

function PastNotification(props) {
    const pastNotifications = useSelector(({ notificationReducer }) => ({
        pastNotifications: notificationReducer.pastNotifications
    }))
    return (
        <div>
            <List
                size="small"
                bordered
                dataSource={pastNotifications}
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

export default PastNotification;