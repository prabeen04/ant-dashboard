import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import  classNames  from 'classnames';
import { Card } from 'antd';
import { getJumpstartList } from '../../actions/dashboardAction';
import JumpStartModal from './jumpStartModal';
import JumpStartDetail from './jumpStartDetail'
import { openJumpstartModal } from '../../actions/dashboardAction';
import '../../App.css';
import './dashboard.css';
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let renderJumpStartBoxes = this.props.jumpStartData.filter((data) => data.visible)
            .map((data) => {
                const jumpstartStyle = classNames({
                    'increase': data.progress<0,
                    'decrease': data.progress>0
                  });
                return <JumpStartDetail key={data.id} data={data}/>
            })

        return (
            <div className="flex-container" style={{ flexGrow: 1, justifyContent: 'flex-start' }}>
                {renderJumpStartBoxes}
                <JumpStartModal/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        jumpStartData: state.dashboardReducer.jumpStartList
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        openJumpstartModal
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartBox);