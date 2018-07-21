import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import  classNames  from 'classnames';
import { Card } from 'antd';
import { getJumpstartList } from '../../actions/dashboardAction';
import JumpStartModal from './jumpStartModal';
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
                // const jumpstart = classNames({
                //     'jumpstart-box': true,
                //     'clickable': true
                //   });
                return <div key={data.id}
                    className={'jumpstart-box'}
                    onClick={() => this.props.openJumpstartModal(data)}>
                    <div>
                        <h3 style={{color: '#aaa'}}>{data.title}</h3>
                        <h2 style={{color: '#eee'}}>{data.value}
                        <span className={classNames('red-background')} style={{color: 'tomato', fontSize: '0.8rem', marginLeft: 5}}>{data.progress}</span>
                        </h2>
                    </div>
                </div>
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