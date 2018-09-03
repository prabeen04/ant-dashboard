import React, { Component } from 'react'
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import { Button } from 'antd'
import 'react-image-crop/dist/ReactCrop.css';

export default class ImageCropper extends Component {
  state = {
    crop: {
      x: 20,
      y: 10,
      width: 100,
      aspect: 1
    },
    showCroppedImage: false,
    croppedImage: null
  }
  
  onImageLoaded = (image) => {
    const crop = makeAspectCrop({
      x: 0,
      y: 0,
      aspect: 16 / 9,
      width: 50,
    }, image.width / image.height);

    const pixelCrop = {
      x: Math.round(image.naturalWidth * (crop.x / 100)),
      y: Math.round(image.naturalHeight * (crop.y / 100)),
      width: Math.round(image.naturalWidth * (crop.width / 100)),
      height: Math.round(image.naturalHeight * (crop.height / 100)),
    };

    this.renderCropPreview(image, pixelCrop);

    this.setState({ crop });
  }
  renderCropPreview = (image, pixelCrop) => {
    console.log(image);
    console.log(pixelCrop);
  }
  handleCrop = () => {
    console.log('handle crop called')
  }
  handleChange = (crop) => {
    this.setState({ crop })
  }
  render() {
    return (
      <div>
        <ReactCrop
          src={this.props.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
          onChange={this.handleChange}
          onImageLoaded={this.onImageLoaded}
          crop={this.state.crop}
        />
        {this.props.src && <Button type="primary" onClick={this.handleCrop}>Crop Here</Button>}
        {this.state.showCroppedImage && <img src={this.state.croppedImage} style={{ height: 400, width: 400 }} />}
      </div>
    )
  }
}
