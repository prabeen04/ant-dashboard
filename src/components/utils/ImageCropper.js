import React, { Component } from 'react'
import ReactCrop from 'react-image-crop';
import { Button } from 'antd'
import 'react-image-crop/dist/ReactCrop.css';

export default class ImageCropper extends Component {
  state = {
    crop: {
      x: 20,
      y: 10,
      width: 100,
      aspect: 1
    }
  }
  function getCroppedImg(image, pixelCrop, fileName) {

    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
  
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  
    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');
  
    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(file => {
        file.name = fileName;
        resolve(file);
      }, 'image/jpeg');
    });
  }
  
  handleCrop = () => {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <ReactCrop
          src={this.props.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
          onChange = {(crop) => {
          console.log(crop)
          this.setState({crop})
        }}
        crop = {this.state.crop}
      />
      {this.props.src && <Button type="primary" onClick={this.handleCrop}>Crop Here</Button>}
      </div>
    )
  }
}
