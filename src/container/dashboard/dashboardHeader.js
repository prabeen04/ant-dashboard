import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Icon, Popover } from 'antd';
import ActionHeader from "../../components/layouts/ActionHeader";
import SettingPopover from '../../components/popover/settingPopover';
import TimeInterval from '../../components/utils/TimeInterval';
import { StyledRangePicker } from "../../components/UI/Antd";
import { FlexContainer } from "../../components/UI/Layout";
import './dashboard.css';
const ButtonGroup = Button.Group;

function DashboardHeader(props) {
    const { fetchChartData } = props;
    const dateRangeList = useSelector(({ dashboardReducer }) => dashboardReducer.dateRangeList)
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

export default DashboardHeader;


function DashboardActionHeaderLeft(props) {
    return (
        <React.Fragment>
            <FlexContainer style={{ alignItems: 'center' }}>
                <TimeInterval times={props.dateRangeList} handleClick={props.fetchChartData} />
                <StyledRangePicker style={{ marginLeft: 8 }} />
            </FlexContainer>
        </React.Fragment>
    )
}

function DashboardActionHeaderRight(props) {
    const [isPopover, setIsPopover] = useState(localStorage.getItem('settingPopover') ? true : false)
    function handleVisibleChange() {
        localStorage.setItem('settingPopover', false)
        setIsPopover(false)
    }
    return (
        <React.Fragment>
            <Popover
                title="Message"
                content={<a onClick={handleVisibleChange}>OK, Got it!</a>}
                trigger="click"
                placement="topLeft"
                visible={isPopover}
                onVisibleChange={handleVisibleChange}
            > <SettingPopover />
            </Popover>
        </React.Fragment>
    )
}
