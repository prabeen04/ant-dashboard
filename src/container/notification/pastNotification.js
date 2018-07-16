import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Button, Checkbox, Avatar } from 'antd';

class PastNotification extends Component {
    render() {
        return (
            <div>
                <List
                    size="small"
                    bordered
                    dataSource={this.props.pastNotifications}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        pastNotifications: state.notificationReducer.pastNotifications
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PastNotification);