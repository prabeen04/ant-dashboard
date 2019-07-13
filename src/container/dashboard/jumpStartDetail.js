import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import classNames from 'classnames';
import { Icon } from 'antd'
import { Spring } from "react-spring/renderprops";
import { openJumpstartModal } from "../../actions/dashboardAction";
const JumpStartDetail = (props) => {
    return (
        <div
            className={'jumpstart-box test'}
            onClick={() => props.openJumpstartModal(props.data)}
        >
            <Spring
                delay={500}
                from={{ opacity: 0, transform: ' scale(0.4)', }}
                to={{ opacity: 1, transform: 'scale(1)' }}>
                {styles => (
                    <div style={styles}>
                        <h3 style={{ color: '#aaa' }}>{props.data.title}</h3>
                        <h2 style={{ color: '#eee' }}>{props.data.value}
                            <span className={props.jumpstartStyle}>
                                {props.data.progress > 0 ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
                                &nbsp;{props.data.progress}</span>
                        </h2>
                    </div>
                )}
            </Spring>
        </div>

    )
}

export default connect(null, (dispatch) => bindActionCreators({ openJumpstartModal }, dispatch))(JumpStartDetail);