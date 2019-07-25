import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import classNames from 'classnames';
import { Card } from 'antd';
import { getJumpstartList } from '../../actions/dashboardAction';
import JumpStartModal from './jumpStartModal';
import JumpStartDetail from './jumpStartDetail'
import { openJumpstartModal } from '../../actions/dashboardAction';
import '../../App.css';
import './dashboard.css';

function JumpStartBox(props) {
    let renderJumpStartBoxes = props.jumpStartData.filter((data) => data.visible)
        .map((data) => {
            const jumpstartStyle = classNames({
                'increase': data.progress < 0,
                'decrease': data.progress > 0
            });
            return <JumpStartDetail key={data.id} data={data} jumpstartStyle={jumpstartStyle} />
        })

    return (
        <div className="flex-container" style={{ flexGrow: 1, justifyContent: 'flex-start' }}>
            {renderJumpStartBoxes}
            <JumpStartModal />
        </div>
    )
}
const mapStateToProps = ({ dashboardReducer }) => ({
    jumpStartData: dashboardReducer.jumpStartList
})

const mapDispatchToProps = dispatch => bindActionCreators({ openJumpstartModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartBox);