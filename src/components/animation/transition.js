import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

class TransitionComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>this is TransitionComponent</div>
        )
    }
}
export default TransitionComponent