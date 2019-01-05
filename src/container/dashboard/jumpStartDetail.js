import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import classNames from 'classnames';
import { openJumpstartModal } from "../../actions/dashboardAction";
import { Icon } from 'antd'
const JumpStartDetail = (props) => {
    return (
        <div className={'jumpstart-box test'}
            onClick={() => props.openJumpstartModal(props.data)}
        >
            <div>
                <h3 style={{ color: '#aaa' }}>{props.data.title}</h3>
                <h2 style={{ color: '#eee' }}>{props.data.value}
                    <span className={props.jumpstartStyle}>
                        {props.data.progress > 0 ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
                        &nbsp;{props.data.progress}</span>
                </h2>
            </div>
        </div>
    )
}

export default connect(null, (dispatch) => bindActionCreators({ openJumpstartModal }, dispatch))(JumpStartDetail);