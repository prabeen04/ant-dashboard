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

        this.state = {
            inn: false
        }
    }

componentDidMount(){
    setTimeout(()=>{
        this.setState({
            inn: true
        })
    },2000)
}
    render(){
        return(
            <Transition in={this.state.inn} timeout={5000}>
            <div>this is TransitionComponent</div>
            </Transition>
        )
    }
}
export default TransitionComponent