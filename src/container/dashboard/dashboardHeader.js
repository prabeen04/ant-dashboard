import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Popover } from 'antd';
import ActionHeader from "../../components/layouts/ActionHeader";
import SettingPopover from '../../components/popover/settingPopover';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    render() {
        const { dateRangeList, fetchChartData } = this.props;
        return (
            <ActionHeader
                leftComponent={<DashboardActionHeaderLeft
                    dateRangeList={dateRangeList}
                    fetchChartData={fetchChartData}
                />}
                rightComponent={<DashboardActionHeaderRight />}
            />
        )
    }
}
const mapStateToProps = (state) => ({
    dateRangeList: state.dashboardReducer.dateRangeList
})
export default connect(mapStateToProps)(DashboardHeader);


class DashboardActionHeaderLeft extends Component {
    render() {
        return (
            <React.Fragment>
                <ButtonGroup>
                    {
                        this.props.dateRangeList.map((range) => {
                            return <Button key={range.id} onClick={() => this.props.fetchChartData()}>{range.value}</Button>
                        })
                    }
                </ButtonGroup>
            </React.Fragment>
        )
    }
}

class DashboardActionHeaderRight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isPopover: true
        }
    }
    handleVisibleChange = () => this.setState({ isPopover: false })
    render() {
        return (
            <React.Fragment>
                <Popover
                    title="Message"
                    content={<a onClick={this.handleVisibleChange}>OK, Got it!</a>}
                    trigger="click"
                    placement="topLeft"
                    visible={this.state.isPopover}
                    onVisibleChange={this.handleVisibleChange}
                > <SettingPopover />
                </Popover>
            </React.Fragment>
        )
    }
}
