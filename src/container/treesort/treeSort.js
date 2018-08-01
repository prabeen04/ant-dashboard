import React, { Component } from 'react'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class TreeSort extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }],
        };
    }
    render() {
        return (
            <div>
                <h3>TreeSort Component</h3>
            </div>
        )
    }
}

export default TreeSort