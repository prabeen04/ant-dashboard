import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Popover } from 'antd';
import SettingPopover from '../../components/popover/settingPopover';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isPopover: true
        }
    }
    handleVisibleChange = () => this.setState({ isPopover: false })
    render() {
        return (
            <div className="dashboard-header">
                <ButtonGroup>
                    {
                        this.props.dateRangeList.map((range) => {
                            return <Button key={range.id} onClick={() => this.props.fetchChartData()}>{range.value}</Button>
                        })
                    }
                </ButtonGroup>
                <Popover
                    title="Message"
                    content={<a onClick={this.handleVisibleChange}>OK, Got it!</a>}
                    trigger="click"
                    visible={this.state.isPopover}
                    onVisibleChange={this.handleVisibleChange}
                > <SettingPopover />
                </Popover>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    dateRangeList: state.dashboardReducer.dateRangeList
})
export default connect(mapStateToProps)(DashboardHeader);