import React from 'react'
import  classNames  from 'classnames';

export default (props) => {
    return (
        <div className={'jumpstart-box'}
            // onClick={() => this.props.openJumpstartModal(data)}
            >
            <div>
                <h3 style={{ color: '#aaa' }}>{props.data.title}</h3>
                <h2 style={{ color: '#eee' }}>{props.data.value}
                    <span className={props.jumpstartStyle}>{props.data.progress}</span>
                </h2>
            </div>
        </div>
    )
}
