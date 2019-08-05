import React, { Component } from 'react'
import { useSelector } from "react-redux";
import { Drawer, Button } from 'antd';
import DrawerTitle from './drawerTitle';
import './post.css';

function EditDrawer(props) {
    const singlePost = useSelector(({ postReducer }) => postReducer.singlePost)
    return (
        <div>
            <Drawer
                title={<DrawerTitle title={props.singlePost.title} />}
                placement="right"
                width={600}
                closable={true}
                wrapClassName={'red-background'}
                onClose={props.handleClose}
                visible={props.open}
            >
                <h2>{props.singlePost.title}</h2>
                <h4>{props.singlePost.author}</h4>
                <p>{props.singlePost.date}</p>
                <p>{props.singlePost.body}</p>
            </Drawer>
        </div>
    )
}

export default EditDrawer;