import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tabs, Icon } from 'antd';
import './settings.css';
const TabPane = Tabs.TabPane;


class Settings extends Component {

    render() {
        return (
            <div className="setting-wrapper">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                        Tab 1
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                        Tab 2
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />fgdf 1</span>} key="3">
                        Tab 3
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />ff 2</span>} key="4">
                        Tab 4
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="5">
                        Tab 5
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />ff 2</span>} key="6">
                        Tab 6
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="7">
                        Tab 7
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="8">
                        Tab 8
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="9">
                        Tab 9
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="10">
                        Tab 10
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
