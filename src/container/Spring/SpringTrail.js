import React, { Component } from 'react';
import { Trail, animated } from 'react-spring'
import styled from 'styled-components';
import { Title } from "../../components/UI/Elements";

const Box = styled(animated.div)`
    cursor: pointer;
    position: relative;
    width: 50%;
    height: 20%;
    background-color: #F3FFBD;
    will-change: transform;
`
class SpringTrail extends Component {
    state = { toggle: true, items: ['item1', 'item2', 'item3', 'item4', 'item5'] }
    toggle = () => this.setState(state => ({ toggle: !state.toggle }))
    render() {
        const { toggle, items } = this.state
        return (
            <div
                style={{
                    backgroundColor: '#247BA0',
                    position: 'relative',
                    width: '100vw',
                    height: '80vh',
                }}>
                <Trail
                    native
                    reverse={toggle}
                    initial={null}
                    items={items}
                    from={{ opacity: 0, x: -100 }}
                    to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}>
                    {item => ({ x, opacity }) => (
                        <Box
                            onClick={this.toggle}
                            style={{
                                opacity,
                                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                            }}
                        >
                            <Item item={item} />
                        </Box>

                    )}
                </Trail>
            </div>
        )
    }
}

export default SpringTrail;

function Item({ item }) {
    return (
        <Title>{Item}</Title>
    )
}