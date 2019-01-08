import React, { Component } from 'react'
import { Transition } from "react-spring";

class SpringTransition extends Component {
    render() {
        const items =  ['Apples', 'Oranges', 'Bananas']
        return (
            <div>
                <Transition
                    items={items}
                    from={{ position: 'absolute', opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}>
                    {toggle =>
                        toggle
                            ? props => <div style={props}>😄</div>
                            : props => <div style={props}>🤪</div>
                    }
                </Transition>
            </div>
        )
    }
}

export default SpringTransition;