import React, { Component } from 'react'
import Axios from 'axios';
import { PIXABAY_URL } from '../../config/pixabay.config';
import { Button, Input } from 'antd';

export default class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            images: []
        }
    }
    componentDidMount() {
        this.getImages()
    }
    getImages = () => {
        //pixabay api
        console.clear()
        Axios.get(`${PIXABAY_URL}=${this.state.query || 'react'}`)
            .then(res => this.setState({ images: res.data.hits }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <Input
                    value={this.state.query}
                    onChange={(e) => this.setState({ query: e.target.value })}
                    style={{width: 300}}
                />&nbsp;
                <Button
                    type='primary'
                    onClick={() => this.getImages()}
                    disabled={!this.state.query}
                >
                    Fetch</Button>
                <ul>
                    {
                        this.state.images.map((image) => <UserAvatar imageUrl={image.previewURL} />)
                    }
                </ul>
            </div>
        )
    }
}

function UserAvatar(props) {
    const { imageUrl } = props
    return (
        <img src={imageUrl} />
    )
}