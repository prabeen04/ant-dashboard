import React, { Component } from 'react'
import Axios from 'axios';
import { PIXABAY_URL } from '../../config/pixabay.config';
import { Button } from 'antd';

export default class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: 'india',
            list: [
                { name: 'tom', age: 34 },
                { name: 'tommy', age: 14 },
                { name: 'terhe', age: 44 },
                { name: 'julia', age: 22 },
            ],
            images: []
        }
    }
    componentDidMount() {
        this.getImages()
    }
    getImages = () => {
        //pixabay api
        console.clear()
        Axios.get(`${PIXABAY_URL}=${this.state.query}`)
            .then(res => {
                console.log(res)
                this.setState({
                    images: res.data.hits
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <input
                    value={this.state.query}
                    onChange={(e) => this.setState({ query: e.target.value })}
                />&nbsp;
                <Button
                    type='primary'
                    onClick={() => this.getImages()}
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