import React, { Component } from 'react'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class TreeSort extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Non-Veg', children: [{ title: 'Egg' },{ title: 'Fish' }] },{ title: 'Veg', children: [{ title: 'Paneer' },{ title: 'Mushroom' }] }],
        };
    }
    render() {
        return (
            <div style={{ height: 400, backgroundColor: '#fff', margin: '0.3rem' }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData =>{ 
                        console.log(this.state)
                        this.setState({ treeData })
                    }}
                />
            </div>
        )
    }
}

export default TreeSort;