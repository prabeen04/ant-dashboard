import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition';

const duration = 300;

class TransitionComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Transition in timeout={5000}>
            <div>this is TransitionComponent</div>
            </Transition>
        )
    }
}
export default TransitionComponent