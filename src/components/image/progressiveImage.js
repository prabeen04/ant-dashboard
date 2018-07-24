import React, { Component } from 'react'

class ProgressiveImage extends Component {
    state = {
        currentImage: this.props.preview,
        loading: true,
    }
    componentDidMount() {
        this.fetchImage(this.props.image)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.image !== this.props.image) {
            this.setState({ currentImage: nextProps.preview, loading: true }, () => {
                this.fetchImage(nextProps.image)
            })
        }
    }

    componentWillUnmount() {
        if (this.loadingImage) {
            this.loadingImage.onload = null
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default ProgressiveImage