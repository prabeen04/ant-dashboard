import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import classNames from 'classnames';
import { Icon } from 'antd'
import { Spring } from "react-spring";
import { openJumpstartModal } from "../../actions/dashboardAction";
const JumpStartDetail = (props) => {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => (
                <div
                    style={props}
                    className={'jumpstart-box test'}
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
            )}
        </Spring>
    )
}

export default connect(null, (dispatch) => bindActionCreators({ openJumpstartModal }, dispatch))(JumpStartDetail);